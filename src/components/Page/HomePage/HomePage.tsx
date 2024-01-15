import styled from "styled-components";
import { EarnButton } from "../../Buttton/HomePageButtons/EarnButton/EarnButton";
import { BorrowButton } from "../../Buttton/HomePageButtons/BorrowButton/BorrowButton";
import { useAccordionStore } from "../../../hooks/useAccordionStore";

const HomePageBlock = styled.div <{margin: string}>`
    width: 100%;
    margin-top: 200px;
    padding-left: 70px;
    padding-bottom: 30px;
    transition: margin-top .3s ease-in-out;
    @media (max-width: 720px) {
        margin-top: ${props => props.margin};
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-left: 0;
    }
`

const MainTextBlock = styled.div`
    width: 600px;
    margin-left:20px;
    margin-right: 20px;
    @media (max-width: 720px) {
        width: 90%;
    }
`

const MainText = styled.a`
    font-size: 70px;
    @media (max-width: 500px) {
        font-size: 45px;
    } 
`

const BlueText = styled.a`
    color: #6CBBFF;
`

const GreyText = styled.h2`
    font-size: 30px;
    color: #BABABA;
    margin-top: 20px;
    @media (max-width: 500px) {
        font-size: 20px;
    } 
`

const ButtonBlock = styled.div`
    max-width: 100%;
    display: flex;
    margin-top: 40px;
    margin-left: 20px;
    @media (max-width: 500px) {
        margin-right: 20px;
        max-width: 90%;
        justify-content: center;
    }
`


export const HomePage = () => {

    const [accordion, setAccordion] = useAccordionStore()

    return(
        <HomePageBlock margin={accordion.margin}>
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