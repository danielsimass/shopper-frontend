import styled from "styled-components";

export const Container = styled.form`
     h2 {
        color: var(--text-title);
        font-size: 1.8rem;
        width: 100%;
        text-align: center;
    }

    p {
        color: var(--text-body);
        font-size: 1rem;
        margin-top: 1rem;
        width: 100%;
        text-align: center;
        margin-bottom: 0.7rem
    }
    
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 1.25rem;

        border: 2px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;
        color: var(--text-title);
        caret-color: var(--text-title);
        &::placeholder {
            color: var(--text-body)
        }

        & + input {
            margin-top: 1rem;
        }
    }
    input:focus{
        outline: none;
    }

    button[type=submit] {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        border-radius: 1.25rem;
        font-weight: 600;

        transition: filter 0.2s;
        cursor: pointer;
        
        &:hover {
            filter: brightness(0.8)
        }
    }
`