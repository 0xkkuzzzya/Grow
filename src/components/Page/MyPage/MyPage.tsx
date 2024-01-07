import styled from "styled-components";
import { useAccordionStore } from "../../../hooks/useAccordionStore";
import { MyPageHeader } from "./MyPageHeader/MyPageHeader";
import { MyPageBalance } from "./MyPageBalance/MyPageBalance";
import { MyPageDeposit } from "./MyPageDeposit/MyPageDeposit";
import { MyPageBorrow } from "./MyPageBorrow/MyPageBorrow";

const MyPageBLock = styled.div <{margin: string}>`
    width: 100%;
    margin-top: ${props => props.margin};
    transition: margin-top .3s ease-in-out;
    display: flex;
    justify-content: center;
`

const MyPageContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
`

const ContentBlock = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`

const BalanceBlock = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
`

const DepositBorrowBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`


export const MyPage = () => {

    const [accordion, setAccordion] = useAccordionStore()

    return(
        <MyPageBLock margin={accordion.margin}>
            <MyPageContainer>
            <MyPageHeader/>
            <ContentBlock>
                <BalanceBlock>
                    <MyPageBalance/>
                </BalanceBlock>
                <DepositBorrowBlock>
                    <MyPageDeposit/>
                    <MyPageBorrow/>
                </DepositBorrowBlock>
            </ContentBlock>
            </MyPageContainer>
        </MyPageBLock>
    )
}