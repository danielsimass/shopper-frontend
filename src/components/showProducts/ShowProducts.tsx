import { useEffect, useState } from "react";
import { ProductModal } from "../productModal";
import { Container } from "./styles";

interface Products {
    id: number;
    name: string;
    price: string;
    qty_stock: string;
    url: string;
    category: string;
}
interface ShowProductsPops {
    list: Array<Products> 
}
export const ShowProducts = ({list}: ShowProductsPops) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Products>({} as Products)

    function handleOpenUserDataModal(product: Products) {
        setSelectedProduct(product)
        setIsModalOpen(true)
    }
    function handleCloseUserDataModal() {
        setIsModalOpen(false)
    }

    console.log()

    return (
        <Container>
            {list && (
                <div className="products">
                {list.map((product: Products)=>{
                 return(
                
                 <div className="product">
                 <button onClick={() => handleOpenUserDataModal(product)}>
                    <img src={product.url} alt={product.name} />
                 </button>
                 <p>{product.name}</p>
                 <p>R$ {product.price}</p>
                 
                 </div>
                )}
                )}
                <ProductModal product={selectedProduct} isOpen={isModalOpen} onRequestClose={handleCloseUserDataModal} />
                </div>
            )}
        </Container>
    )
}