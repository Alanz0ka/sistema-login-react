import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width: 100vw;
    background-color: #121212;
`;

export const Form = styled.form`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 30px 0px;
    min-width: 300px;
    @media (max-width: 670px) {
        width: 100%;
       }

    h1 {
        color: white;
        font-size: 24px;
        font-weight: 700;
    }

    p {
        color: white;
        font-size: 16px;
        font-weight: bold;
    }

    a{
        color: #121212;
        font-weight: bold;
        font-size: 14px;
    }
`

export const FormWrapper = styled.div`
    display: flex;
    width: 60%;
    gap: 10px 0px;
    background-color: #00C853;
    border-radius: 5px;
    justify-content: space-arround;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width: 1000px) {
        width: 90%;
      }
    @media (max-width: 670px) {
       jusitfy-content: center;
       flex-direction: column;
      }

`

export const FormImageContainer = styled.div`
    width: 50%;
    height: 50%;
    padding: 5%;
    min-width: 300px;
    @media (max-width: 670px) {
        width: 100%;
        padding: 0 12%;
       }
`
export const SubContainerSign = styled.div`
    display: flex;
    flex-direction: row;
    gap:0px 20px;
    align-items: center;
`