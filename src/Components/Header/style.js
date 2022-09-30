import styled from "styled-components";
export const Headers = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(245, 245, 245, 1);
    padding-bottom: 0.95rem;
    justify-content: space-between;
    span {
    font-size: 1rem;
    color: #EB5757;
    }
    .divInput {
    width: 18rem;
    border: 0.13rem solid rgba(224, 224, 224, 1);
    background-color: #FFF;
    padding: 0.35rem ;
    border-radius: 0.5rem;
    }

    .input {
    outline: none;
    border: none;
    border-radius: 0.5rem;
    padding: 0.65rem;
    }

    .input::placeholder {
    color: rgba(224, 224, 224, 1);
    }

    .spanBotao {
    background-color: rgba(39, 174, 96, 1);
    padding: 1rem;
    border-radius: 0.5rem;
    border: 0.13rem solid #27AE60;
    color: #FFF;
    font-size: 0.85rem;
    }
    @media screen and (min-width: 700px) {

        flex-direction: row;
        justify-content: space-around;


    .divInput {
        width: 25rem;
        display: flex;
        justify-content: space-between;
        padding: 0.35rem;
        height: 3.75rem;
        margin-bottom:-1rem;
    }
    
    }


`