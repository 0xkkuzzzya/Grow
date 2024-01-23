import styled from "styled-components";
import { BalanceHeader } from "./BalanceHeader/BalanceHeader";
import { BalanceInfoBlock } from "./BalanceInfoBlock/BalanceInfoBlock";
import { TokenInfo } from "./TokenInfo/TokenInfo";

const BalanceBlock = styled.div`
    width: 425px;
    max-height: 100%;
    transition: max-height .3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
`

export const MyPageBalance = () => {
    return(
        <BalanceBlock>
            <BalanceHeader/>
            <BalanceInfoBlock/>
            <TokenInfo/>
        </BalanceBlock>
    )
}