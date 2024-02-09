import styled from "styled-components";
import USQLogo from '../../../../../assets/svg/USQLogo.svg'
import ATOMLogo from '../../../../../assets/svg/AtomLogo.svg'
import WBTCLogo from '../../../../../assets/svg/WBTCLogo.svg'
import GUSQLogo from '../../../../../assets/svg/GUSQLogo.svg'

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
    width: 45px;
    margin-left: 15px;
`

const PriceBlock = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: left;
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

const AmountBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    text-align: right;
    margin-right: 15px;
`

const MainAmountText = styled.a`
    font-size: 20px;
    font-weight: 700;
`

const SecondAmountText = styled.a`
    font-size: 14px;
    font-weight: 700;
    color: rgba(192, 192, 192, 1);
`


export const TokenFieldBalance = () => {
    return(
        <FieldArr>
            <FieldBlock>
            <TokenImg src={USQLogo}></TokenImg>
            <TokenName>USQ</TokenName>
            <PriceBlock >
                <PriceText>1 USQ</PriceText>
            </PriceBlock>
            <AmountBlock>
                <MainAmountText>210 USQ</MainAmountText>
                <SecondAmountText>210 USQ</SecondAmountText>
            </AmountBlock>
            </FieldBlock>
            <FieldBlock>
            <TokenImg src={ATOMLogo}></TokenImg>
            <TokenName>ATOM</TokenName>
            <PriceBlock>
                <PriceText style={{marginLeft: "-5px"}}>9.11 USQ</PriceText>
            </PriceBlock>
            <AmountBlock>
                <MainAmountText>190 USQ</MainAmountText>
                <SecondAmountText>20.8 ATOM</SecondAmountText>
            </AmountBlock>
            </FieldBlock>
            <FieldBlock>
            <TokenImg src={WBTCLogo}></TokenImg>
            <TokenName>WBTC</TokenName>
            <PriceBlock>
                <PriceText style={{marginLeft: "5px"}}>42.9k USQ</PriceText>
            </PriceBlock>
            <AmountBlock>
                <MainAmountText>120 USQ</MainAmountText>
                <SecondAmountText>20.0027 WBTC</SecondAmountText>
            </AmountBlock>
            </FieldBlock>
            <FieldBlock>
            <TokenImg src={GUSQLogo}></TokenImg>
            <TokenName>gUSQ</TokenName>
            <PriceBlock>
                <PriceText style={{marginLeft: "-6px"}}>1.16 USQ</PriceText>
            </PriceBlock>
            <AmountBlock>
                <MainAmountText>10 USQ</MainAmountText>
                <SecondAmountText>8.62 gUSQ</SecondAmountText>
            </AmountBlock>    
            </FieldBlock>         
        </FieldArr>
    )
}