import styled from "styled-components";

const InputBlock = styled.div`
    width: 100%;
`

const Input = styled.input`
    max-width: 70%;
    height: 100%;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    color: #333;
    outline: none;
    margin-left: 10px;
`


export const EarnDepositInput = () => {
    return(
        <InputBlock>
            <Input placeholder="0"></Input>
        </InputBlock>
    )
}