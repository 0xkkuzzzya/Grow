import styled from "styled-components";
import USQBalance from '../../../assets/svg/USQLogo.svg'
import { MyPageHeader } from "./MyPageHeader/MyPageHeader";

const MyPageBlock = styled.div`
    width: 100%;
`

const MyPageContainer = styled.div`
    max-width: 700px;
    margin: 0 auto;
`

const HeaderBlock = styled.div`
    width: 100%;
`

const BalanceBlock = styled.div`
    width: 100%;
`

const BalanceText = styled.h1`
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 70px;
    display: flex;
    align-items: center;
`

const BalanceImg = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 10px;
`

const DynamicBlock = styled.div`
    width: 100%;
    height: 13px;
    background: linear-gradient(to right, rgba(87, 187, 242, 1), rgba(10, 152, 252, 1));
    border-radius: 20px;
`

const ContainerBlock = styled.div`
    
`


export const MyPage = () => {
    return(
        <MyPageBlock>
            <MyPageContainer>
                <HeaderBlock>
                    <h1 style={{fontSize: "30px", fontWeight: "600"}}>My Page</h1>
                </HeaderBlock>
                <BalanceBlock>
                    <BalanceText>1000<BalanceImg src={USQBalance}></BalanceImg>
                </BalanceText>
                </BalanceBlock>
                <DynamicBlock/>
                <ContainerBlock>
                    <MyPageHeader></MyPageHeader>
                </ContainerBlock>
            </MyPageContainer>
        </MyPageBlock>
    )
}