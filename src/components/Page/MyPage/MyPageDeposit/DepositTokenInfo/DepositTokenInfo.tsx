import styled from "styled-components";
import { DepositUSQToken, DepositWBTCToken } from "./DepositTokenArr/DepositTokenArr";
import { useAccordionMy } from "../../../../../hooks/useAccordionMy";
import Arrow from '../../../../../assets/svg/ArrowMy.svg'

const TokenInfoBlock = styled.div`
    width: 80%;
`

const ButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const ButtonAccordion = styled.button`
    max-width: 100%;
    background: transparent;
    border: none;
    margin-top: 20px;
    margin-bottom: 25px;
    cursor: pointer;
`

const ButtonImg = styled.img`
    width: 20px;
`

const AccordionTokenBlock = styled.div <{height: string}>`
    width: 100%;
    max-height: ${props => props.height};
    transition: max-height .3s ease-in-out;
    overflow: hidden;
`


export const DepositTokenInfo = () => {

    const [mAccordion, setMAccordion] = useAccordionMy()

    function openTokenBlock () {
        if(mAccordion.active == false) {
            setMAccordion({
                active: true,
                height: '100%',
            })
        } else if (mAccordion.active == true) {
            setMAccordion({
                active: false,
                height: '0px',
            })
        }
    }

    return(
        <TokenInfoBlock>
            <DepositUSQToken/>
            <AccordionTokenBlock height={mAccordion.height}>
                <DepositWBTCToken/>
            </AccordionTokenBlock>
            <ButtonBlock>
                <ButtonAccordion onClick={openTokenBlock}>
                    <ButtonImg src={Arrow}/>
                </ButtonAccordion>
            </ButtonBlock>
        </TokenInfoBlock>
    )
}