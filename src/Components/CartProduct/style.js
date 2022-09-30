import styled from "styled-components";
export const Produtos = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 4.4rem
    }
    figure{
        background-color: rgba(224, 224, 224, 1);
        margin: 1rem 0
    }
    .descricao {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0.65rem 1.88rem 0 0.5rem;
    }
    .titulo {
    font-size: 1rem;
    }
    h4{
    font-size: 0.8rem;
    color: rgba(130, 130, 130, 1)
    }
    .botao{
    cursor: pointer;
    position: absolute;
    left: 71%;
    margin-left: 1rem;
    font-size: 0.9rem;
    color: rgba(189, 189, 189, 1);
    }
`




