import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    background-color: var(--background);
    padding: 80px 0px 80px; 
    
    div {
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
        margin-bottom: 2rem;
        h2 {
            font-size: 2rem;
            border-bottom: 3px solid var(--text-title);
            color: var(--text-title);
        }
    }
`

