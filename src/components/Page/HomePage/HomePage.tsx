import styled from "styled-components";
import { EarnButton } from "../../Buttton/HomePageButtons/EarnButton/EarnButton";
import { BorrowButton } from "../../Buttton/HomePageButtons/BorrowButton/BorrowButton";

const HomePageBlock = styled.div`
    width: 100%;
    margin-top: 200px;
    margin-left: 70px;
    @media (max-width: 720px) {
        padding-left: 10px;
        padding-right: 10px;
        margin-left: 0px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`

const MainTextBlock = styled.div`
    width: 600px;
    @media (max-width: 720px) {
        width: 100%;
    }
`

const MainText = styled.a`
    font-size: 70px; 
`

const BlueText = styled.a`
    color: #6CBBFF;
`

const GreyText = styled.h2`
    font-size: 30px;
    color: #BABABA;
`

const ButtonBlock = styled.div`
    max-width: 100%;
    display: flex;
    @media (max-width: 500px) {
        margin-left: 10px;
        margin-right: 10px;
    }
`


export const HomePage = () => {
    return(
        <HomePageBlock>
            <MainTextBlock>
                <MainText>
                    <BlueText>Save</BlueText>, <BlueText>borrow</BlueText> and 
                    <BlueText> earn</BlueText> crypto
                    assets with Qube
                    Grow.
                </MainText>
                <GreyText>Simply lend & borrow crypto. Provide
                        liquidity to Qube Grow savings protocol
                        and earn rewards on your digital assets.
                </GreyText>
            </MainTextBlock>
            <ButtonBlock>
                <EarnButton/>
                <BorrowButton/>
            </ButtonBlock>
        </HomePageBlock>
    )
}