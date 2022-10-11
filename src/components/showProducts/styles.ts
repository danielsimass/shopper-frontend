import styled from "styled-components";

export const Container = styled.div`
    width: 90vw;
    height: 100%;
    padding: 0;

    .products {
        width: 100%;
        max-width: 1080px;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;

        .product {
            height: 250px;
            width: 180px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            font-size: 0.8rem;
            p {
                max-width: 150px;
            }
            img {
                height: 150px;
                width: 150px;
                /* margin: 0 auto; */
            }
        }
    }
`
