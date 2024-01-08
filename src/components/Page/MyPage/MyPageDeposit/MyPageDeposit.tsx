import styled from "styled-components";
import { DepositHeader } from "./DepositHeader/DepositHeader";
import { DepositBalance } from "./DepositBalance/DepositBalance";
import { DepositTokenInfo } from "./DepositTokenInfo/DepositTokenInfo";

const DepositBlock = styled.div`
    width: 400px;
    height: 280px;
    border: 3px solid #EEEEEE;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 800px) {
        margin-top: 20px;
        width: 100%;
    }
`

export const MyPageDeposit = () => {
    return(
        <DepositBlock>
            <DepositHeader/>
            <DepositBalance/>
            <DepositTokenInfo/>
        </DepositBlock>
    )
}