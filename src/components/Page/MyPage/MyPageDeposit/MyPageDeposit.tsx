import styled from "styled-components";
import { DepositHeader } from "./DepositHeader/DepositHeader";
import { DepositBalance } from "./DepositBalance/DepositBalance";
import { DepositTokenInfo } from "./DepositTokenInfo/DepositTokenInfo";

const DepositBlock = styled.div`
    width: 400px;
    max-height: 100%;
    border: 3px solid #EEEEEE;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: max-height .3s ease-in-out;
    @media (max-width: 800px) {
        margin-top: 20px;
        width: 100%;
    }
    @media (max-width: 500px) {
        border: none;
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