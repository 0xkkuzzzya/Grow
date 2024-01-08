import styled from "styled-components";
import '@typehaus/metropolis/bold.css'

const TokenBalanceBlock = styled.div`
    max-width: 100%;
    margin-top: 0px;
    margin-right: 10px;
    text-align: right;
    display: flex;
    flex-direction: column;
`

const TokenBalance = styled.a`
    font-weight: 700;
    font-size: 19px;
    font-family: 'Metropolis', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const TokenBalanceUSQ = styled.a`
    font-weight: 700;
    font-size: 15px;
    color: #C0C0C0;
`


export let BalancegUSQ = <TokenBalanceBlock>
                <TokenBalance>0.00 gUSQ</TokenBalance>
                <TokenBalanceUSQ>0.00 USQ</TokenBalanceUSQ>
            </TokenBalanceBlock>
        

export let BalanceATOM =  <TokenBalanceBlock>
                <TokenBalance>15 ATOM</TokenBalance>
                <TokenBalanceUSQ>0.00 USQ</TokenBalanceUSQ>
            </TokenBalanceBlock>
       
