import styled from "styled-components";

export const Container = styled.div`
    h1 {
        font-size: 28px;
        color: var(--text-title)
    }

    .row {
        display: flex;
        justify-content: space-between;
        
        /* color: var(--text-body); */
        .total {
                font-size: 1.5rem;
            }
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