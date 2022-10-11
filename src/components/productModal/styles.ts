import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    img {
        width: 150px;
        height: 150px;
        margin-right: 50px
    }
    div {
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 2rem;
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

    button {
        background-color: var(--text-title);
        padding: 0.5rem;
        margin-top: 1rem;
        border-radius: 15px;
        color: #fff;
        border: none;
        cursor: pointer;
    }
`