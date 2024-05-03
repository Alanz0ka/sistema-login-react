import styled from "styled-components";

export const BotaoCustomizado = styled.button`
    color: #fff;
    font-size: 20px;
    border: 30px;
    background-color: #212121;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    cursor: pointer;
    transition: opacity 0.3s;
    font-weight: bold;

    ${props => !props.disabled &&`
    &:hover{
        opacity: 0.95;
    }
    `}

    ${props => !props.disabled &&`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `}

    ${props => props.disabled &&`
        background-color: transparent !important;
        border-shadow: none !important;
        border: 2px solid #00E676;
        cursor: not-allowed;
    `}

`