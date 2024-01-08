import styled from "styled-components";
import QubeLogo from '../../assets/svg/QubeLogo.svg'
import { Castomlink } from "./CastomLink/CastomLink";
import { ConnectButton } from "../Buttton/ConnectButton/CoonectButton";
import { DefoultLinkBlock, MobileLinkBlock } from "./VariablesLink/BlockLink";
import { useMediaQuery } from 'react-responsive'

const MainHeader = styled.div`
    max-width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    background: #ECEBEB;
`

const HeaderLogoBlock = styled.div`
    display: flex;
    align-items: center;
`

const HeaderLogoQUBE = styled.img`
    display: block;
    width: 55px;
    height: 55px;
    margin-left: 50px;
    @media (max-width: 500px) {
        width: 40px;
        height: 40px;
        margin-left: 20px;
    }
`


const LinkText = styled.button`
    width: 100%;
    background: transparent;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    padding: 0;
    color: black;
    text-decoration: none;
`

const LinkFlex = styled.div`
    display: flex;
    align-items: center;
`

const Test = styled.div`
    width: 100px;
    flex-grow: 1;
    @media (min-width: 730px){
        flex-grow: 0;
        display: flex;
    }
`

const HeaderNav = styled.nav`
    max-width: 100%;
    text-decoration: none;
    display: flex;
    gap: 100px;
    margin: 0 auto;
    justify-content: center;
    @media (max-width: 930px) {
        gap: 50px;
    }
    @media (max-width: 730px) {
        position: absolute;
        margin-top: 80px;
    }

`

export const Header = () => {
    const isDes = useMediaQuery({
        query: "(min-device-width: 950px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 950px)",
    });

    return(
        <MainHeader>
            <HeaderLogoBlock>
                    <HeaderLogoQUBE src={QubeLogo}></HeaderLogoQUBE>
            </HeaderLogoBlock>
                {isDes && <DefoultLinkBlock/>}
                {isMob && <MobileLinkBlock/>}
            <ConnectButton></ConnectButton>
        </MainHeader>
    )
}
