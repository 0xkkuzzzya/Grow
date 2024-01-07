import styled from "styled-components";
import { useAccordionStore } from "../../../hooks/useAccordionStore";
import { BorrowHeader } from "./BorrowHeader/BorrowHeader";
import { BorrowContainer } from "./BorrowContrainer/BorrowContrainer";

const BorrowBLock = styled.div <{margin: string}>`
    max-width: 100%;
    margin-top: ${props => props.margin};
    transition: margin-top .3s ease-in-out;
    display: flex;
    justify-content: center;
    
    @media (max-width: 500px){
        max-width: 100%;
        margin-left: 0;
        margin-right: 0;
    }
`





export const Borrow = () => {

    const [accordion, setAccordion] = useAccordionStore()

    return(
        <BorrowBLock margin={accordion.margin}>
            <BorrowContainer/>
        </BorrowBLock>
    )
}