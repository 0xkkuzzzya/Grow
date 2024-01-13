import styled from "styled-components";
import { BorrowHeader } from "./BorrowHeader/BorrowHeader";
import { BorrowBalance } from "./BorrowBalance.tsx/BorrowBalance";
import { BorrowTokenInfo } from "./BorrowTokenInfo/BorrowTokenInfo";

const BorrowBlock = styled.div`
    width: 400px;
    height: 280px;
    border: 3px solid #EEEEEE;
    margin-top: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 800px) {
        width: 100%;
    }
    @media (max-width: 500px) {
        border: none;
        margin-top: 0px;
    }
`

export const MyPageBorrow = () => {
    return(
        <BorrowBlock>
            <BorrowHeader/>
            <BorrowBalance/>
            <BorrowTokenInfo/>
        </BorrowBlock>
    )
}