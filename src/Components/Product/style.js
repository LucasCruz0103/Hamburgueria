import styled from "styled-components";
export const CardProduto = styled.div`
    margin: 0.65rem;
    border: 0.13rem solid rgba(224, 224, 224, 1);
    figure{
        padding: 0 1.55rem;
        background-color: rgba(245, 245, 245, 1);
    }
    img{
        width: 10.32rem; 
    }
    .distancia{
        margin: 1rem 0 0 0.65rem;
    }
    h2{
        color: rgba(51, 51, 51, 1);
        font-size: 1.2rem; 
    }
    h4{
        font-size: 0.8rem;
        color: rgba(130, 130, 130, 1);
    }
    p{
        color: rgba(39, 174, 96, 1);
        font-size: 0.9rem;
    }
    button{
        cursor: pointer;
        background-color: rgba(39, 174, 96, 1);
        padding: 0.65rem;
        border-radius: 0.65rem;
        border: 0.13rem solid #27AE60;
        color: #FFF;
        font-size: 0.9rem;
        margin-top: 1.4rem;
        margin-bottom: 1rem;
    }
    @media screen and (min-width: 730px) {
     
        width: 28%;
        flex-wrap: wrap;


    :hover {
        border: 2px solid rgba(51, 51, 51, 1);
    }

    .button:hover {
        background-color: rgba(147, 215, 175, 1);
    }

    figure{
        display: flex;
        justify-content: center;
    }
    }
 `



