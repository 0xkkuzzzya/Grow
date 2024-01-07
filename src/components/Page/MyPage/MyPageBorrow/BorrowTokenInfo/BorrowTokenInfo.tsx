import styled from "styled-components";
import { BorrowUSQToken } from "./BorrowTokenArr/BorrowTokenArr";

const TokenInfoBlock = styled.div`
    width: 80%;
`


export const BorrowTokenInfo = () => {
    return(
        <TokenInfoBlock>
            <BorrowUSQToken/>
        </TokenInfoBlock>
    )
}