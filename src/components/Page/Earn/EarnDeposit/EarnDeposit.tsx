import styled from "styled-components";
import { EarnDepositContainer } from "./DepositContainer/EarnDepositContainer";
import { useAccordionStore } from "../../../../hooks/useAccordionStore";

const DepositBlock = styled.div <{margin: string}>`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: ${props => props.margin};
    transition: margin-top .3s ease-in-out;
`

export const EarnDeposit = () => {

    const [accordion, setAccordion] = useAccordionStore()

    return(
        <DepositBlock margin={accordion.margin}>
            <EarnDepositContainer/>
        </DepositBlock>
    )
}