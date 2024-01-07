import styled from "styled-components";
import { BalanceGUSQToken, BalanceATOMToken } from "./TokenArr.tsx/TokenArr";

const TokenInfoBlock = styled.div`
    width: 80%;
`


export const TokenInfo = () => {
    return(
        <TokenInfoBlock>
            <BalanceGUSQToken/>
            <BalanceATOMToken/>
        </TokenInfoBlock>
    )
}