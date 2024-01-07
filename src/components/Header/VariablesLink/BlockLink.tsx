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
    margin-top: 10px;
    justify-content: center;
    margin-right: 30px;
    margin-left: 10em;
    @media (max-width: 1000px) {
        margin-left: 8em;
    }
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
    margin-left: 110px;
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
                    <Castomlink to="/MyPage">My</Castomlink>
                </LinkBlock>
                <LinkBlock>
                    <Castomlink to="/Borrow">Borrow</Castomlink>
                </LinkBlock>
                <LinkBlock>
                    <Castomlink to="/Earn">Earn</Castomlink>
                </LinkBlock>
                <LinkBlock>
                    <Castomlink to="/Liquidation">Liquidation</Castomlink>
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
                        <Castomlink to="/MyPage">To</Castomlink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <Castomlink to="/Borrow">Borrow</Castomlink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <Castomlink to="/Earn">Earn</Castomlink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <Castomlink to="/Liquidation">Liquidation</Castomlink>
                    </MobLinkBlock>
                </MobBlockLink>
            </NavBlock>
        </LinkMobBlock>
    )
}
    
