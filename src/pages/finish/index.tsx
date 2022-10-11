import shopperLogo from '../../assets/logo.png';
import { useApiContext } from '../../context/context';
import { Container, Content } from './styles';
import { format, parse } from "date-fns";
import { useEffect, useState } from 'react';
import { normalize } from 'path';


export const Finish = () => {
    const { customer } = useApiContext()
    const [date, setDate] = useState('')

    useEffect(()=> {normalizeDate()}, [])

    const normalizeDate = () => { 
        if(customer) {
            const newDate = format(parse(customer.deliveryDate, "yyyy-MM-dd", new Date()),
            "dd/MM/yyyy"
            );
            setDate(newDate)
        }
    }
    return (
        <Container>
        <Content>
            <img src={shopperLogo} style={{width: '100px'}} alt="Logo" />
            <h1>Compra efetuada com Sucesso!</h1>
            <p className='subtitle'>Você receberá suas compras em: {date}</p>
            <p className='slogan'>Volte Sempre</p>
        </Content>
    </Container>
    )
}