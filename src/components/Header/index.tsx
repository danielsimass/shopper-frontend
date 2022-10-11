import { Container } from "./styles"
import { CartModal } from "../cartModal"
import { useApiContext } from "../../context/context"
import { useEffect, useState } from "react"

import logoWhite from '../../assets/logo-white.png' 
import userLogo from '../../assets/user.png'
import cartIcon from '../../assets/cart.png'
import wharehouseIcon from '../../assets/warehouse.png'
import { Link } from "react-router-dom"

export const Header = () => {
    const { customer, total } = useApiContext();
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)
    const [isStockModalOpen, setIsStockModalOpen] = useState(false)

    useEffect(() => {
        console.log(customer)
    },[])
    function handleOpenCartDataModal() {
        setIsCartModalOpen(true)
    }
    function handleCloseCartDataModal() {
        setIsCartModalOpen(false)
    }


    return (
        <Container>
            <CartModal onRequestClose={handleCloseCartDataModal} isOpen={isCartModalOpen}/>
            
        {customer && (
        <>
        <div>
            <img className="logo" src={logoWhite} alt='Logo' />
            <p className="shopper">SHOPPER</p>
        </div>
        <div className="info">
            <div className="user">
                <img src={userLogo} alt="Usuário" style={{width: '40px', height: '40px'}} />
                <p>Olá, {customer.name}</p>
            </div>
            <div className="cart">
                <button onClick={handleOpenCartDataModal}>
                    <img className="cartImg" src={cartIcon} alt='Carrinho de compras' />
                </button>
                <p>Total: R$ {total.toFixed(2)}</p>
            </div>
            <div className="warehouse">
                <Link to='/stock' >
                    <img className="cartImg" src={wharehouseIcon} alt='Estoque' />
                </Link>
                <p>Estoque</p>
            </div>
        </div>
        </>
        )}
    </Container>
    )
}