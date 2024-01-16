import styled from "styled-components";
import { EarnContainer } from "./EarnContainer/EarnContainer";
import { useAccordionStore } from "../../../../hooks/useAccordionStore";

const EarnBLock = styled.div <{margin: string}>`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: ${props => props.margin};
    transition: margin-top .3s ease-in-out;
`



export const Earn = () => {

    const [accordion, setAccordion] = useAccordionStore()


    return(
        <EarnBLock margin={accordion.margin}>
            <EarnContainer/>
        </EarnBLock>
    )
}