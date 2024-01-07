import styled from "styled-components";

const Header = styled.div`
    width: 80%;
`

const HeaderText = styled.h1`
    font-size: 25px;
`


export const BalanceHeader = () => {
    return(
        <Header>
            <HeaderText>Balance</HeaderText>
        </Header>
    )
}