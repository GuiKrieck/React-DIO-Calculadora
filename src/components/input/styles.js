import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: contain;
    background-color: #AAFFAA;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    

    input{
        width: 100%;
        height: 75px;
        background-color: #AAFFAA;
        border: 0;
        outline: none;
        padding: 0 10px;

        font-family: 'Roboto';
        font-size: 2.8rem;
        font-weight: 700;
        text-align: right;
    }

    #small{
        background-color: #000000;
        color:#FFFFFF;
        font-size: 1rem;
        max-height: 20px;
        justify-self: flex-end;
        align-self: flex-end;
    }
`