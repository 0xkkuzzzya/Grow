import styled from "styled-components";

const ConfirmButton = styled.button`
    width: 250px;
    height: 40px;
    font-size: 15px;
    font-weight: 700;
    background: linear-gradient(to left, #3B9CFC, #6CBBFF);
    border: none;
    margin: 0 auto;
    border-radius: 13px;
`

const ButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
`


export const EarnDepositConfirm = () => {
    return(
        <ButtonBlock>
            <ConfirmButton>Confirm</ConfirmButton>
        </ButtonBlock>
    )
}