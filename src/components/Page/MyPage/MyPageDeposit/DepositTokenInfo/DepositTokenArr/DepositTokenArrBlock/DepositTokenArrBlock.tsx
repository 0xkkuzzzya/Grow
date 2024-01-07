import styled from "styled-components";

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
`

const TokenBalanceUSQ = styled.a`
    font-weight: 700;
    font-size: 15px;
    color: #C0C0C0;
`


export let DepositUSQ = <TokenBalanceBlock>
                            <TokenBalance>0.00 USQ</TokenBalance>
                            <TokenBalanceUSQ>0.00 USQ</TokenBalanceUSQ>
                        </TokenBalanceBlock>
        

export let DepositWBTC = <TokenBalanceBlock>
                            <TokenBalance>0.00 WBTC</TokenBalance>
                            <TokenBalanceUSQ>0.00 USQ</TokenBalanceUSQ>
                        </TokenBalanceBlock>