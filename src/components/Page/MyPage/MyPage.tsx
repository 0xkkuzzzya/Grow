import styled from "styled-components";
import USQBalance from '../../../assets/svg/USQLogo.webp'
import { MyPageHeader } from "./MyPageHeader/MyPageHeader";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

const MyPageBlock = styled.div`
    width: 100%;
`


const Block = styled.div <{ backgroundColor: string }>`
    width: 100%;
    height: calc(100vh - 65px);
    background: ${props => props.backgroundColor};
    margin-top: -5px;
`

const MyPageContainer = styled.div`
    max-width: 570px;
    margin: 0 auto;
    @media (max-width: 570px) {
        padding: 0 20px;
        max-width: 500px;
    }
`

const HeaderBlock = styled.div <{ TextColor: string }>`
    width: 100%;
    color: ${props => props.TextColor};
`

const BalanceBlock = styled.div`
    width: 100%;
`

const BalanceText = styled.h1 <{ TextColor: string }>`
    margin-top: 20px;
    margin-bottom: 30px;
    color: ${props => props.TextColor};
    font-size: 65px;
    display: flex;
    align-items: center;
    @media (max-width: 570px) {
        font-size: 60px;
    }
`

const BalanceImg = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 10px;
`

const DynamicBlock = styled.div`
    width: 100%;
    height: 10px;
    border-radius: 20px;
    background: repeating-linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255));
`
// rgb(119, 191, 249), rgb(45, 150, 255)
const ContainerBlock = styled.div`
    
`



export const MyPage = () => {

    const [theme, setTheme] = useToggleTheme()

    return (
        <Block backgroundColor={theme.backgroundColor}>
            <MyPageBlock>
                <MyPageContainer>
                    <HeaderBlock TextColor={theme.TextColor}>
                        <h1 style={{ fontSize: "30px", fontWeight: "600" }}>My Page</h1>
                    </HeaderBlock>
                    <BalanceBlock>
                        <BalanceText TextColor={theme.TextColor}>1000<BalanceImg src={USQBalance}></BalanceImg>
                        </BalanceText>
                    </BalanceBlock>
                    <DynamicBlock />
                    <ContainerBlock>
                        <MyPageHeader></MyPageHeader>
                    </ContainerBlock>
                </MyPageContainer>
            </MyPageBlock>
        </Block>
    )
}