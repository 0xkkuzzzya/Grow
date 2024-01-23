import styled from "styled-components";
import USQ from '../../../../../../assets/svg/USQLogo.svg'
import WBTC from '../../../../../../assets/svg/WBTCLogo.svg'
import { DepositUSQ, DepositWBTC } from "./DepositTokenArrBlock/DepositTokenArrBlock";

const TokenBlock = styled.div`
    
`

const Token = styled.div`
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


export const DepositUSQToken = () => {
    return(
        <TokenBlock>
            <Token>
                <TokenImgBlock>
                    <TokenImg src={USQ}></TokenImg>
                    <TokenImgText>USQ</TokenImgText>
                </TokenImgBlock>
                <TokenBalanceBlock>
                    {DepositUSQ}
                </TokenBalanceBlock>
            </Token>
        </TokenBlock>
    )
}

export const DepositWBTCToken = () => {
    return(
        <TokenBlock>
            <Token>
                <TokenImgBlock>
                    <TokenImg src={WBTC}></TokenImg>
                    <TokenImgText>WBTC</TokenImgText>
                </TokenImgBlock>
                <TokenBalanceBlock>
                    {DepositWBTC}
                </TokenBalanceBlock>
            </Token>
        </TokenBlock>
    )
}