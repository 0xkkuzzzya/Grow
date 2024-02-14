import styled from "styled-components";
import USQLogo from '../../../../../assets/svg/USQLogo.svg'
import ATOMLogo from '../../../../../assets/svg/AtomLogo.svg'
import WBTCLogo from '../../../../../assets/svg/WBTCLogo.svg'
import GUSQLogo from '../../../../../assets/svg/GUSQLogo.svg'
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";

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

const FieldBlock = styled.div <{BorderField: string}>`
    width: 99%;
    height: 60px;
    border: 2px solid red;
    border-radius: 17px;
    margin-top: 10px;
    font-family: 'Inter', sans-serif;
    border: ${props => props.BorderField};
    display: flex;
    align-items: center;
`

const TokenImg = styled.img`
    width: 45px;
    margin-left: 15px;
`

const PriceBlock = styled.div <{TextColor: string}>`
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    width: 100px;
    white-space: nowrap;
    text-align: left;
    color: ${props => props.TextColor};
`

const PriceText = styled.a`
    font-size: 20px;
    font-weight: 700;
    text-align: left;
`

const TokenName = styled.a <{TextColor: string}>`
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
    color: ${props => props.TextColor};
`

const AmountBlock = styled.div <{TextColor: string}>`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    text-align: right;
    margin-right: 15px;
    color: ${props => props.TextColor};
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


export const TokenFieldBalanceDesktop = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <FieldArr>
            <FieldBlock BorderField={theme.BorderField}>
            <TokenImg src={USQLogo}></TokenImg>
            <TokenName TextColor={theme.TextColor}>USQ</TokenName>
            <PriceBlock TextColor={theme.TextColor}>
                <PriceText>1 USQ</PriceText>
            </PriceBlock>
            <AmountBlock TextColor={theme.TextColor}>
                <MainAmountText>210 USQ</MainAmountText>
                <SecondAmountText>210 USQ</SecondAmountText>
            </AmountBlock>
            </FieldBlock>
            <FieldBlock BorderField={theme.BorderField}>
            <TokenImg src={ATOMLogo}></TokenImg>
            <TokenName TextColor={theme.TextColor}>ATOM</TokenName>
            <PriceBlock TextColor={theme.TextColor}>
                <PriceText style={{marginLeft: "-5px"}}>9.11 USQ</PriceText>
            </PriceBlock>
            <AmountBlock TextColor={theme.TextColor}>
                <MainAmountText>190 USQ</MainAmountText>
                <SecondAmountText>20.8 ATOM</SecondAmountText>
            </AmountBlock>
            </FieldBlock>
            <FieldBlock BorderField={theme.BorderField}>
            <TokenImg src={WBTCLogo}></TokenImg>
            <TokenName TextColor={theme.TextColor}>WBTC</TokenName>
            <PriceBlock TextColor={theme.TextColor}> 
                <PriceText style={{marginLeft: "5px"}}>42.9k USQ</PriceText>
            </PriceBlock>
            <AmountBlock TextColor={theme.TextColor}>
                <MainAmountText>120 USQ</MainAmountText>
                <SecondAmountText>20.0027 WBTC</SecondAmountText>
            </AmountBlock>
            </FieldBlock>
            <FieldBlock BorderField={theme.BorderField}>
            <TokenImg src={GUSQLogo}></TokenImg>
            <TokenName TextColor={theme.TextColor}>gUSQ</TokenName>
            <PriceBlock TextColor={theme.TextColor}>
                <PriceText style={{marginLeft: "-6px"}}>1.16 USQ</PriceText>
            </PriceBlock>
            <AmountBlock TextColor={theme.TextColor}>
                <MainAmountText>10 USQ</MainAmountText>
                <SecondAmountText>8.62 gUSQ</SecondAmountText>
            </AmountBlock>    
            </FieldBlock>         
        </FieldArr>
    )
}

export const TokenFieldBalanceMobile = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <FieldArr>
            <FieldBlock BorderField={theme.BorderField}>
            <TokenImg src={USQLogo}></TokenImg>
            <TokenName TextColor={theme.TextColor}>USQ</TokenName>
            <AmountBlock TextColor={theme.TextColor} style={{marginLeft: "auto"}}>
                <MainAmountText>210 USQ</MainAmountText>
                <SecondAmountText>210 USQ</SecondAmountText>
            </AmountBlock>
            </FieldBlock>
            <FieldBlock BorderField={theme.BorderField}>
            <TokenImg src={ATOMLogo}></TokenImg>
            <TokenName TextColor={theme.TextColor}>ATOM</TokenName>
            <AmountBlock TextColor={theme.TextColor} style={{marginLeft: "auto"}}>
                <MainAmountText>190 USQ</MainAmountText>
                <SecondAmountText>20.8 ATOM</SecondAmountText>
            </AmountBlock>
            </FieldBlock>
            <FieldBlock BorderField={theme.BorderField}>
            <TokenImg src={WBTCLogo}></TokenImg>
            <TokenName TextColor={theme.TextColor}>WBTC</TokenName>
            <AmountBlock TextColor={theme.TextColor} style={{marginLeft: "auto"}}>
                <MainAmountText>120 USQ</MainAmountText>
                <SecondAmountText>20.0027 WBTC</SecondAmountText>
            </AmountBlock>
            </FieldBlock>
            <FieldBlock BorderField={theme.BorderField}>
            <TokenImg src={GUSQLogo}></TokenImg>
            <TokenName TextColor={theme.TextColor}>gUSQ</TokenName>
            <AmountBlock TextColor={theme.TextColor} style={{marginLeft: "auto"}}>
                <MainAmountText>10 USQ</MainAmountText>
                <SecondAmountText>8.62 gUSQ</SecondAmountText>
            </AmountBlock>    
            </FieldBlock>         
        </FieldArr>
    )
}