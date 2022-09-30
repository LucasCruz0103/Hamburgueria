import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        width: 80%;
        margin: 0.63rem 0 0 0;
        background: #27AE60;
        color: #fff;
        padding: 1.6rem 1.6rem 1.6rem 1rem;
        border-radius: 0.35rem 0.35rem 0 0;
        font-size: 18px;
    }
    .alimentos{
        width: 80%;
        background: #F5F5F5;
        padding: 1.6rem 1.6rem 1.6rem 1rem;
        text-align: center; 

    }
    @media screen and (min-width: 840px) {
            width: 30%;
            max-height: 26.3rem;
            position: fixed;
            top: 17%;
            right: 0;
            left: 70%;
   }

`
