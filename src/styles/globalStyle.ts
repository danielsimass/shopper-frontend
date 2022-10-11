import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
     :root {
        --background: #cbece680;
        --red: #e52e4d;
        --green: #20ab77;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #10453b;
        --text-body: #156556;
        --shape: #ffffff
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }
    .userDataModal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .productModal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .userDataModal-content {
        width: 100%;
        max-width: 386px;
        background: #acd8cf;
        position: relative;
        padding: 3rem;
        border-radius: 25px;
        border: none;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        &:hover {
            filter: brightness(0.7)
        }
    }

    .productModal-content {
        width: 100%;
        max-width: 550px;
        background: #acd8cf;
        position: relative;
        padding: 3rem;
        border-radius: 25px;
        border: none;
    }

    .cart-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cart-content {
        width: 100%;
        max-width: 800px;
        background: #acd8cf;
        position: relative;
        padding: 3rem;
        border-radius: 25px;
        border: none;
    }
`