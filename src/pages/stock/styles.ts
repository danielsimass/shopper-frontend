import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    background-color: var(--background);
    padding: 30px 100px 80px; 
    margin: 0;
    h1 {
        text-align: center;
        font-size: 3rem;
    }
    .row {
        display: flex;
        justify-content: space-between;
        
        div {
            display: flex;
            color: var(--text-body);
            p {
                margin: 5px;
                font-size: 1.2rem;
            }
            
            button {
                cursor: pointer;
                color: var(--text-title);
                text-decoration: underline;
            }
            
        }
    }
    .save {
            background-color: var(--text-title);
            width: 50%;
            margin: 0 auto;
            border-radius: 15px;

            button {
                width: 100%;
                color: #fff;
                padding: 0.5rem;
                font-weight: bold;
                font-size: 1.3rem;
                text-align: center;
                cursor: pointer;
            }
        }
`

