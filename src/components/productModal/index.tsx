import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from "../../assets/close.svg"
import { useToast } from 'rc-toastr';
import { useApiContext } from '../../context/context';

interface Products {
    id: number;
    name: string;
    price: string;
    qty_stock: string;
    url: string;
    category: string;
    quantity?: number;
}

interface UserDataModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    product: Products;
}
export const ProductModal = ({product, isOpen, onRequestClose}: UserDataModalProps) => {
    const [quantity, setQuantity] = useState(product.quantity ? product.quantity : 0)
    const { toast } = useToast()
    const { checkStock, addProductToCart, cart } = useApiContext()
    useEffect(() => {console.log(quantity)},[])
    const inProductInCart = (product: Products) => {
        const searchObject = cart.find((obj) => obj.id === product.id);
        if(searchObject) {
            return true
        } else {
            return false
        }
    }
    const addProduct = async () => {
        const check = await checkStock(product.id, quantity)
        const isProductInCart = inProductInCart(product)
        console.log(quantity)
        if (isProductInCart) {
            addProductToCart(product, quantity)
            setQuantity(0)
            onRequestClose()
        } else {
            if (quantity <= 0) {
                toast('A quantidade precisa ser maior que 0!', 'error')
             } else if(check ) {
                 addProductToCart(product, quantity)
                 setQuantity(0)
                 onRequestClose()
             } else {
                 toast('Quantidade excede o estoque!', 'error')
             }
        }
        
    }
    const closeModal = () => {
        setQuantity(0)
        onRequestClose()
    }
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            overlayClassName="productModal-overlay"
            className="productModal-content"
        >   
            <button 
                type='button' 
                onClick={closeModal} 
                className='react-modal-close'>
                <img src={closeImg} alt="Fechar modal" />
            </button> 
            <Container>
                <img src={product.url} alt={product.name} />
                <div>
                    <p>{product.name}</p>
                    <p>R$ {product.price}</p>
                    <input type='number' value={quantity} onChange={event => setQuantity(+event.target.value)} />
                    <button onClick={addProduct}>
                        Adicionar ao carrinho
                    </button>
                </div>
            </Container>
        </Modal>
    )
}