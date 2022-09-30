import styled from "styled-components";
export const DivProduto = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 0 1.6rem;
    padding: 0 1rem;
    overflow-x: scroll;
    @media screen and (min-width: 860px) {
         
        width: 70%;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        overflow-x: hidden;
    }    
`
