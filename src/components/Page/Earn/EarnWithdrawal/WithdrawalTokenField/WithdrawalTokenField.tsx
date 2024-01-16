import styled from "styled-components";
import { EarnWithdrawalInput } from "./WithdrawalInput/EarnWithdrawalInput";
import { EarnWithdrawalToken } from "./WithdrawalToken/EarnWithdrawalToken";

const FieldBlock = styled.div`
    width: 100%;
`

const TokenBlock = styled.div`
    height: 100%;
    border: 2px solid #eee;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    padding: 15px 0px;
`

const TokenText = styled.a`
    color: #BABABA;
    font-size: 15px;
    font-weight: 700;
`

const AmountButton = styled.button`
    max-width: 100%;
    max-height: 100%;
    background: transparent;
    border: 2px solid #3B9CFC;
    display: flex;
    color: #3B9CFC;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 11px;
    font-weight: 700;
`


export const EarnWithdrawalTokenField = () => {
    return(
        <FieldBlock>
            <TokenText>I want to deposit</TokenText>
            <TokenBlock>
                <EarnWithdrawalToken/>
                <EarnWithdrawalInput/>
                <AmountButton>MAX</AmountButton>
            </TokenBlock>
        </FieldBlock>
    )
}