import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import MaskedInput from 'react-text-mask'
import { getAddressByCep } from '../../utils';
import { Container } from './styles';
import closeImg from "../../assets/close.svg"
import { useApiContext } from '../../context/context';
import { useHistory } from 'react-router-dom';
import { format, parse } from "date-fns";
import { useToast } from 'rc-toastr';

interface UserDataModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export const UserDataModal = ({ isOpen, onRequestClose}: UserDataModalProps) => {
    const { sendCustomer } = useApiContext()
    const history = useHistory()
    const { toast } = useToast()

    const [name, setName] = useState('')
    const [cep, setCep] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [city, setCity] = useState('')
    const [complement, setComlpemente] = useState('')
    const [date, setDate] = useState('')

    const getAddress = async (cep: string) => {

      const normalizeCep = cep.replace(/\D/g, "")

      if (normalizeCep.length === 8) {
          console.log('um')
          const address = await getAddressByCep(cep)
          setCep(normalizeCep)
          setStreet(address.street)
          setCity(address.city)
      }

    }

    const handleSubmit = async (event: FormEvent) => {
      event.preventDefault()

      const deliveryDate = format(
        parse(date, "dd/MM/yyyy", new Date()),
        "yyyy-MM-dd"
        );
      
      const today = new Date()

      if(name === '') {
        return toast('Pro favor, informe seu nome!', 'error')
      }
      if(cep === '') {
        return toast('Pro favor, informe seu cep!', 'error')
      }
      if(city === '') {
        return toast('Pro favor, informe sua citdade!', 'error')
      }
      if(street === '') {
        return toast('Pro favor, informe sua rua!', 'error')
      }
      if(number === '') {
        return toast('Pro favor, informe o número de sua residência!', 'error')
      }
      if(date === '') {
        return toast('Pro favor, informe a data que deseja receber suas compras!', 'error')
      }
      if(today > new Date(deliveryDate)) {
        return toast('Data inválida. Por favor, insira uma data futura!', 'error')
      } else {

        const customer = {
          name,
          cep: cep.replace(/\D/g, ""),
          city,
          street,
          number,
          complement,
          deliveryDate
        }
        const response = await sendCustomer(customer)
        if(response) {
          onRequestClose()
          history.push('/shopping')
        }
      }
    }
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="userDataModal-overlay"
            className="userDataModal-content"
        >
           <button 
                type='button' 
                onClick={onRequestClose} 
                className='react-modal-close'>
                <img src={closeImg} alt="Fechar modal" />
            </button> 
            
            <Container onSubmit={handleSubmit}>
                <h2>Vamos começar!</h2>
                <p>
                    Antes de tudo, precisamos de algumas informações.
                </p>
                <input 
                  placeholder='Nome' 
                  value={name} 
                  onChange={event => setName(event.target.value)} 
                />
                <MaskedInput
                    mask={[
                      /\d/,
                      /\d/,
                      ".",
                      /\d/,
                      /\d/,
                      /\d/,
                      "-",
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    placeholder="CEP"
                    value={cep}
                    onChange={event => getAddress(event.target.value)}
                  />
                <input 
                  placeholder='Cidade' 
                  value={city} 
                  onChange={event => setCity(event.target.value)} 
                />
                <input 
                  placeholder='Rua' 
                  value={street} 
                  onChange={event => setStreet(event.target.value)} 
                />
                <input 
                  placeholder='Número' 
                  value={number} 
                  onChange={event => setNumber(event.target.value)} 
                />
                <input 
                  placeholder='Complemento' 
                  value={complement} 
                  onChange={event => setComlpemente(event.target.value)} 
                />
                <MaskedInput
                    mask={[
                      /\d/,
                      /\d/,
                      "/",
                      /\d/,
                      /\d/,
                      "/",
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    placeholder="Data para entrega"
                    value={date}
                    onChange={event => setDate(event.target.value)}
                  />
                <button type='submit'>Escolher produtos</button>
            </Container>
        </Modal>
    )
}