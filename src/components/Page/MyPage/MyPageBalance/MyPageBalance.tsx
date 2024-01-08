import styled from "styled-components";
import { BalanceHeader } from "./BalanceHeader/BalanceHeader";
import { BalanceInfoBlock } from "./BalanceInfoBlock/BalanceInfoBlock";
import { TokenInfo } from "./TokenInfo/TokenInfo";

const BalanceBlock = styled.div`
    width: 425px;
    max-height: 100%;
    border: 3px solid #EEEEEE;
    border-radius: 10px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    @media (max-width: 800px) {
        margin-right: 0px;
    }
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