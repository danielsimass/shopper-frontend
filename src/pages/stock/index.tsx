import { useEffect } from "react"
import { Header } from "../../components/Header"
import { ShowProducts } from "../../components/showProducts/ShowProducts"
import { useApiContext } from "../../context/context"
import { Container } from "./styles"

export const Stock = () => {
    const { getProducts, products } = useApiContext()

    useEffect(() => {
        getProducts()
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    }, [])
    return (
        <Container>
            <h1>ESTOQUE:</h1>
            <div className="list">
                    {products.map(product => {
                        return (
                            <div className="row">
                                <p>{product.name}</p>
                                <div>
                                <p>R$ {product.price}</p>
                                <p><strong>{product.qty_stock}</strong> un.</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
           
        </Container>
    )
}

