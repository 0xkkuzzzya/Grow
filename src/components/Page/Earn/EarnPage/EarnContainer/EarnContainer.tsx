import styled from "styled-components";
import { EarnHeader } from "../EarnHeader/EarnHeader";
import { EarnSerach } from "../EarnSearch/EarnSearch";
import { EarnFields } from "../EarnFields/EarnFields";

const ContainerBlock = styled.div`
    width: 500px;
    height: 100%;
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    align-items: center;
`

export const EarnContainer = () => {
    return(
        <ContainerBlock>
            <EarnHeader/>
            <EarnSerach/>
            <EarnFields/>
        </ContainerBlock>
    )
}