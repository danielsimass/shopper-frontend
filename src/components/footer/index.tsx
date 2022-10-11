import { Container } from "./styles"


export const Footer = ()=> {

    return (
        <Container>
            <p>
                Desenvolvido com ❤️
            </p>
            <p>
                por 
            <a href="https://github.com/danielsimass" target="_blank">
               {' '}Daniel Simas
            </a>
            </p>
        </Container>
    )
}