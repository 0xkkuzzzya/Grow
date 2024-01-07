import styled from "styled-components";
import Accordionlogo from "../../../assets/svg/AccordionLogo.svg"
import { useAccordionStore } from "../../../hooks/useAccordionStore";

const LinkMobButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 30px;
    margin-top: 5px;
    outline: none;
    margin-right: 20px;
    
`

const AccrordionImg = styled.img`
    width: 25px;
    height: 25px;
    margin-left: auto;
`

const ButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
`

export const LinkButton = () => {

    const [accordion, setAccordion] = useAccordionStore()

    function openLinkBlock () {
        if(accordion.active == false) {
            setAccordion({
                active: true,
                margin: '210px',
                height: '200px',
                padding: '10px'
            })
        } else if (accordion.active == true) {
            setAccordion({
                active: false,
                margin: '50px',
                height: '0px',
                padding: '0px'
            })
        }
    }

    return(
        <ButtonBlock>
            <LinkMobButton onClick={openLinkBlock}>
                <AccrordionImg src={Accordionlogo}></AccrordionImg>
            </LinkMobButton>
        </ButtonBlock>
    )
}