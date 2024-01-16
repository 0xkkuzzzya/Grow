import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    font-size: 20px;
    color: #333;
    outline: none;
    margin-left: 10px;
`


export const EarnWithdrawalInput = () => {
    return(
            <Input placeholder="0"></Input>
    )
}