import styled from "styled-components";
import GUSQ from '../../../../../../assets/svg/GUSQLogo.svg'
import ATOMLogo from '../../../../../../assets/svg/CosmosLogo.svg'
import USQLogo from '../../../../../../assets/svg/USQLogo.svg'
import { BalanceATOM, BalanceUSQ, BalancegUSQ } from "./TokenArrBalanceBlock/TokenArrBalanceBlock";

const TokenBlock = styled.div`
    
`

const Token = styled.div`
    width: 100%;
    height: 50px;
    border: 2px solid #eee;
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TokenImgBlock = styled.div`
    display: flex;
    align-items: center;
`

const TokenImg = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 10px;
`

const TokenImgText = styled.h1`
    font-size: 17px;
    margin-left: 5px;
`

const TokenBalanceBlock = styled.div`
`


export const BalanceGUSQToken = () => {
    return(
        <TokenBlock>
            <Token>
                <TokenImgBlock>
                    <TokenImg src={GUSQ}></TokenImg>
                    <TokenImgText>gUSQ</TokenImgText>
                </TokenImgBlock>
                <TokenBalanceBlock>
                    {BalancegUSQ}
                </TokenBalanceBlock>
            </Token>
        </TokenBlock>
    )
}

export const BalanceATOMToken = () => {
    return(
        <TokenBlock>
            <Token>
                <TokenImgBlock>
                    <TokenImg src={ATOMLogo}></TokenImg>
                    <TokenImgText>ATOM</TokenImgText>
                </TokenImgBlock>
                <TokenBalanceBlock>
                    {BalanceATOM}
                </TokenBalanceBlock>
            </Token>
        </TokenBlock>
    )
}

export const BalanceUSQToken = () => {
    return(
        <TokenBlock>
            <Token>
                <TokenImgBlock>
                    <TokenImg src={USQLogo}></TokenImg>
                    <TokenImgText>USQ</TokenImgText>
                </TokenImgBlock>
                <TokenBalanceBlock>
                    {BalanceUSQ}
                </TokenBalanceBlock>
            </Token>
        </TokenBlock>
    )
}