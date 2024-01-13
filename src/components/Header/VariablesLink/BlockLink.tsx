import styled from "styled-components";
import { Castomlink } from "../CastomLink/CastomLink";
import { LinkButton } from "../../Buttton/LinkButton/LinkButton";
import { useAccordionStore } from "../../../hooks/useAccordionStore";


const BlockLink = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 80px;
    height: 60px;
    justify-content: center;
    margin-right: 30px;
    margin-left: 50px;
`

const NavBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const LinkBlock = styled.div`
    @media (min-width: 730px){
        flex-grow: 0;
        display: flex;
    }
`

const MobLinkBlock = styled.div`
    background-color: rgb(245,245,245);
    margin: 0px 20px;
    display: flex;
    outline: none;
    border-radius: 10px;
    @media (min-width: 730px){
        flex-grow: 0;
        display: flex;
    }
`

const MobBlockLink = styled.nav <{height: string, padding: string}>`
    width: 100%;
    margin-left: 90px;
    margin-top: 15px;
    padding-top: 10px;
    max-height: ${props => props.height};
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    overflow: hidden;
    transition: max-height .3s ease-in-out;
    background: #ECEBEB;
    padding-bottom: ${props => props.padding};
    @media (min-width: 500px) {
        margin-left: 92px;
    }
    @media (max-width: 500px) {
        margin-left: 90px;
    }
`

const LinkMobBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`


export const DefoultLinkBlock = () => {
    return(
            <BlockLink>
                <LinkBlock>
                    <Castomlink to="/myPage">My</Castomlink>
                </LinkBlock>
                <LinkBlock>
                    <Castomlink to="/borrow">Borrow</Castomlink>
                </LinkBlock>
                <LinkBlock>
                    <Castomlink to="/earn">Earn</Castomlink>
                </LinkBlock>
                <LinkBlock>
                    <Castomlink to="/liquidation">Liquidation</Castomlink>
                </LinkBlock>
                
            </BlockLink>
    )
}

export const MobileLinkBlock = () => {

    const [accordion, setAccordion] = useAccordionStore()

    return(
        <LinkMobBlock>
           <LinkButton></LinkButton>
           <NavBlock>
                <MobBlockLink height={accordion.height} padding={accordion.padding}>
                    <MobLinkBlock>
                        <Castomlink to="/mypage">My</Castomlink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <Castomlink to="/borrow">Borrow</Castomlink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <Castomlink to="/earn">Earn</Castomlink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <Castomlink to="/liquidation">Liquidation</Castomlink>
                    </MobLinkBlock>
                </MobBlockLink>
            </NavBlock>
        </LinkMobBlock>
    )
}
    
