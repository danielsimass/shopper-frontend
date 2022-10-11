import { useEffect } from "react"
import { Header } from "../../components/Header"
import { ShowProducts } from "../../components/showProducts/ShowProducts"
import { useApiContext } from "../../context/context"
import { Container } from "./styles"

export const Shop = () => {
    const { getProducts, drinks, disposables, personals } = useApiContext()

    useEffect(() => {
        getProducts()
        console.log(drinks, disposables, personals)
    }, [])
    return (
        <Container>
           <Header />
           <div>
                <h2>Bebidas</h2>
                <ShowProducts list={drinks} />
           </div>
           <div>
                <h2>Descartáveis:</h2>
                <ShowProducts list={disposables} />
           </div>
           <div>
                <h2>Produtos pessoais:</h2>
                <ShowProducts list={personals} />
           </div>
        </Container>
    )
}

