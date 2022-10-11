import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

interface contextApiProviderProps {
    children: ReactNode
}

interface Products {
    id: number;
    name: string;
    price: string;
    qty_stock: string;
    url: string;
    category: string;
}

interface CartProducts {
    id: number;
    name: string;
    price: string;
    qty_stock: string;
    url: string;
    category: string;
    quantity: number;
}

interface Customer {
    name: string;
    cep: string;
    city: string;
    street: string;
    number: string;
    complement: string;
    deliveryDate:string;
}
interface CustomerWId {
    id: number;
    name: string;
    cep: string;
    city: string;
    street: string;
    number: string;
    complement: string;
    deliveryDate:string;
}

interface contextApiData {
    sendCustomer: (customerData: Customer) => Promise<Boolean>;
    customer: CustomerWId | undefined;
    getProducts: () => void;
    drinks: Array<Products>;
    disposables: Array<Products>;
    personals: Array<Products>;
    checkStock: (productId: number, quantity: number) => Promise<Boolean>;
    addProductToCart: (product: Products, quantity: number) => void;
    total: number;
    cart: Array<CartProducts>;
    saveOrder: () => Promise<Boolean>;
    products: Array<Products>;
}

const ApiContext = createContext<contextApiData>(
    {} as contextApiData
)

export function ApiContextProvider({children}: contextApiProviderProps) {
    const [customer, setCustomer] = useState<CustomerWId>({} as CustomerWId)
    const [drinks, setDrinks] = useState<Products[]>([])
    const [disposables, setDisposables] = useState<Products[]>([])
    const [personals, setPersonals] = useState<Products[]>([])
    const [cart, setCart] = useState<CartProducts[]>([])
    const [total, setTotal] = useState(0)
    const [products, setProducts] = useState<Products[]>([])
    const [costumerId, setCostumerId] = useState(0)

    const sendCustomer = async (customerData: Customer) => {
        try {
            const response = await api.post('/customers', customerData)
            setCostumerId(response.data.id)
            setCustomer(response.data)
            return true
        } catch (error) {
            return false
        }
    }

    const getProducts = async () => {
        try {
            const resDrinks = await api.get('/products/category/bebida')
            const resDisposables = await api.get('/products/category/descartaveis')
            const resPersonals = await api.get('/products/category/pessoal')
            const resProducts =  await api.get('/products')
            
            const drinks: Array<Products> = resDrinks.data
            const disposables: Array<Products> = resDisposables.data
            const personals: Array<Products> = resPersonals.data
            const products: Array<Products> = resProducts.data
           
            setDrinks(drinks)
            setDisposables(disposables)
            setPersonals(personals)
            setProducts(products)

        } catch (error) {
            console.log('ERROR')
        }
    }

    const checkStock = async (productId: number, quantity: number) => {
        const res = await api.get(`products/checkstock/${productId}/${quantity}`)
        return res.data
    }

    const addProductToCart = (product: Products, quantity: number) => {
        const searchObject = cart.find((obj) => obj.id === product.id);
        if (searchObject) {
            const filtredCart = cart.filter((obj) => obj.id !== product.id);
            if(quantity <= 0) {
                setCart(filtredCart)
                setTotal(total - (+searchObject.price * searchObject.quantity))
            } else {
                setCart([...filtredCart, {...product, quantity}])
                setTotal(total - (+searchObject.price * searchObject.quantity) + (+product.price * quantity))
            }
        } else {
            setTotal(total + (+product.price * quantity))
            setCart([...cart, {...product, quantity}])
        }
        
    }

    const saveOrder = async () => {
        const data = {
            customerId: costumerId,
            products: cart
        }
        console.log(data)
        try {
            await api.post('/orders', data)
            return true
        } catch (error) {
            return false
        }
    }


    return (
        <ApiContext.Provider value={{
            sendCustomer, 
            customer, 
            getProducts, 
            drinks, 
            disposables, 
            personals, 
            checkStock, 
            addProductToCart, 
            total, 
            cart, 
            saveOrder,
            products,

            }}>
            {children}
        </ApiContext.Provider>
    )
}

export function useApiContext() {
    const context = useContext(ApiContext)
    return context
}