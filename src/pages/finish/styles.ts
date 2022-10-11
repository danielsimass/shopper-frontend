import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0;
    background-color: var(--background);
`

export const Content = styled.div`
    max-width: 420px;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    z-index: 1100;

    h1 {
        font-size: 2.2rem;
        margin-bottom: 15px;
        color: var(--text-title);
        text-align: center; 
    }

    .subtitle {
        font-size: 1rem;
        color: var(--text-body)
    }
    .slogan {
        font-size: 1.1rem;
        margin-top: 1.3rem;
        color: var(--text-body)
    }

    img {
        margin: 90px auto 30px;
    }

    
`