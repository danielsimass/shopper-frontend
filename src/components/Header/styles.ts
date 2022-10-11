import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 60px;
    background-color: var(--green);
    display: flex;
    justify-content: space-between;
    color: #fff;
    position: fixed;
    top: 0;
    div {
        display: flex;
        /* margin: 0; */
    }

    .logo {
        height: 50px;
        margin-top: 2px;
        margin-left: 15px
        align-items: center;
        margin-left: 20px
    }

    input {
        border-radius: 30px;
        border: none;
    }
    input:focus{
        outline: none;
    }
    
    .shopper {
        height: 100%;
        margin-top: 15px;
        margin-left: 10px;

        font-size: 18px;
        font-weight: bold;
        color: #fff;
    }

    .user {
        width: 280px;
        align-items: center;
        justify-content: flex-end;
        /* margin-top: 25px; */
    }
    .cart {
        max-width: 190px;
        align-items: center;
        justify-content: flex-end;
        
        /* margin-top: 10px; */
        button {
            cursor: pointer;
        }
        img {
            margin-top: 5px;
        }
    }

    .info{
        height: 100%;
        align-items: center;
        justify-content: flex-end;
        margin-top: 15px;
        max-width: 480px;
        p {
            margin-top: 8px;
            margin-left: 10px;
            margin-right: 15px;
        }
        
    }

    .warehouse {
        width: 50%;
        margin-left: -30px;
        align-items: center;
        justify-content: flex-end;
        img {
            width: 30px;
            height: 30px;
        }
    }

`