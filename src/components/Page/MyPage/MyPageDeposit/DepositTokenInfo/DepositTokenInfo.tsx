import styled from "styled-components";
import { DepositUSQToken, DepositWBTCToken } from "./DepositTokenArr/DepositTokenArr";

const TokenInfoBlock = styled.div`
    width: 80%;
`


export const DepositTokenInfo = () => {
    return(
        <TokenInfoBlock>
            <DepositUSQToken/>
            <DepositWBTCToken/>
        </TokenInfoBlock>
    )
}