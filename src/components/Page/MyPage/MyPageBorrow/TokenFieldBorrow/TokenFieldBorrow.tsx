import styled from "styled-components";
import USQLogo from '../../../../../assets/svg/USQLogo.svg'
import ATOMLogo from '../../../../../assets/svg/AtomLogo.svg'
import WBTCLogo from '../../../../../assets/svg/WBTCLogo.svg'
import GUSQLogo from '../../../../../assets/svg/GUSQLogo.svg'
import { EarnCastomLink } from "../../../Earn/EarnCastomLink/EarnCastomLink";

const FieldArrS = styled.div`
    overflow: auto;
    overflow-x: visible;
    height: 400px;
    scrollbar-color: rgba(87, 187, 242, 1) transparent;
    scrollbar-width: thin;
`

const FieldArr = styled.div`
    overflow: visible;
`

const FieldBlock = styled.div`
    width: 99%;
    height: 60px;
    border: 2px solid red;
    border-radius: 17px;
    margin-top: 10px;
    font-family: 'Inter', sans-serif;
    border: 2px solid #eee;
    display: flex;
    align-items: center;
`

const TokenImg = styled.img`
    width: 40px;
    margin-left: 15px;
`

const PriceBlock = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    white-space: nowrap;
    text-align: left;
`

const PriceText = styled.a`
    font-size: 20px;
    font-weight: 700;
    text-align: left;
`

const TokenName = styled.a`
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
`

const ButtonsBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: -5px;
    margin-right: 15px;
`

const EarnDepositButton = styled.button `
    width: 130px;
    height: 100%;
    color: white;
    border: none;
    border-radius: 50px;
    background: linear-gradient(to right, #3B9CFC, #6CBBFF);
    margin-right: 5px;
    margin-top: 5px;
    padding: 5px 15px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    cursor: pointer;
`

const EarnWithdrawalButton = styled.button`
    width: 130px;
    height: 100%;
    color: #3B9CFC;
    border: 2px solid #3B9CFC;
    border-radius: 50px;
    background:transparent;
    margin-left: 5px;
    margin-top: 5px;
    padding: 5px 15px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    cursor: pointer;
`


export const TokenFieldBorrow = () => {
    return(
        <FieldArr>
            <FieldBlock>
            <TokenImg src={USQLogo}></TokenImg>
            <TokenName>USQ</TokenName>
            <PriceBlock>
                <PriceText>1 USQ</PriceText>
            </PriceBlock>
            <ButtonsBlock >
                <EarnCastomLink to="/Manage">
                    <EarnDepositButton>Manage</EarnDepositButton>
                </EarnCastomLink>
            </ButtonsBlock>
            </FieldBlock>
        </FieldArr>
    )
}