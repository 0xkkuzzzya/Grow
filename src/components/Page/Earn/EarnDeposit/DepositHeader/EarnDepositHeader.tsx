import styled from "styled-components";
import { EarnCastomLink } from "../../EarnCastomLink/EarnCastomLink";

const HeaderBlock = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
`

const ButtonBack = styled.a`
    font-size: 12px;
    font-weight: 600;
    color: #BABABA;
`

const HeaderText = styled.h1`
    font-size: 30px;
    margin-top: 10px;
`


export const EarnDepositHeader = () => {
    return(
        <HeaderBlock>
            <EarnCastomLink to="/earn">
                <ButtonBack>Back</ButtonBack>
            </EarnCastomLink>
            <HeaderText>Deposit</HeaderText>
        </HeaderBlock>
    )
}

