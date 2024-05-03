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
    min-width: 300px;
    gap: 30px 0px;
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
    flex-wrap: wrap;
    align-items: center;
    @media (max-width: 1000px) {
        width: 90%;
      }
    @media (max-width: 670px) {
       jusitfy-content: center;
      }
`

export const FormImageContainer = styled.div`
    width: 50%;
    height: 100%;
    padding: 7%;
    display: flex;
    min-width: 300px;
    @media (max-width: 670px) {
        width: 100%;
       }
`
export const SubContainerSign = styled.div`
    display: flex;
    flex-direction: row;
    gap:0px 20px;
    align-items: center;
`