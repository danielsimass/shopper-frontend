import { Container, Content } from './styles';

import shopperLogo from '../../assets/logo.png';
import promotionalLogo from '../../assets/logo-programada.svg'
import { Background } from '../../components/background';
import { UserDataModal } from '../../components/userDataModal';
import { useState } from 'react';


export const HomePage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function handleOpenUserDataModal() {
        setIsModalOpen(true)
    }
    function handleCloseUserDataModal() {
        setIsModalOpen(false)
    }
    return (
        <>
        <Container>
            <UserDataModal isOpen={isModalOpen} onRequestClose={handleCloseUserDataModal}/>
            <Content>
                <img src={shopperLogo} style={{width: '100px'}} alt="Logo" />
                <h1>Bem-vindo!</h1>
                <p className='subtitle'>Aqui você compra sem ir ao mercado</p>
                <img src={promotionalLogo} style={{width: '180px'}} alt="Logo promocional" />
                <button type="button" onClick={handleOpenUserDataModal}>
                    Ir as compras
                </button>
                <p className='slogan'>ENTREGA MENSAIS</p>
            </Content>
        </Container>
            <Background />
        </>
    )
}