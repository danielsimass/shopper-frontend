import { useState } from "react";
import Modal from "react-modal"
import closeImg from "../../assets/close.svg"
import { useApiContext } from "../../context/context";
import { ProductModal } from "../productModal";
import { Container } from "./styles";
import { useHistory } from 'react-router-dom';

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface Products {
    id: number;
    name: string;
    price: string;
    qty_stock: string;
    url: string;
    category: string;
    quantity: number;
}

export const CartModal = ({isOpen, onRequestClose}: ModalProps) => {

    const history = useHistory()

    const { cart, total, saveOrder } = useApiContext()
    const [isProductModalOpen, setIsproductModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Products>({} as Products)

    const closeProductModal = () => {
        setIsproductModalOpen(false)
    }
    const openProductModal = (product: Products) => {
        setSelectedProduct(product)
        setIsproductModalOpen(true)
    }
    const handleSave = async  () => {
        const save = await saveOrder()
        if(save) history.push('/finish')
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="cart-overlay"
            className="cart-content"
        >      
            <ProductModal onRequestClose={closeProductModal} isOpen={isProductModalOpen} product={selectedProduct} />
            <button 
                type='button' 
                onClick={onRequestClose} 
                className='react-modal-close'>
                <img src={closeImg} alt="Fechar modal" />
            </button> 
            <Container>
                <h1>Seus Produtos:</h1>
                <div className="list">
                    {cart.map(product => {
                        return (
                            <div className="row">
                                <p>{product.name}</p>
                                <div>
                                <p>R$ {product.price}</p>
                                <p><strong>{product.quantity}</strong> un.</p>
                                <button onClick={() => openProductModal(product)}>editar</button>
                                </div>
                            </div>
                        )
                    })}
                    <div className="row">
                        <p className="total">TOTAL:</p>
                        <div>
                           <p className="total"><strong> R$ {total.toFixed(2)}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="save">
                    <button onClick={handleSave}>SALVAR PEDIDO</button>
                </div>
                
            </Container>
        </Modal>
    )
}