import styled from "styled-components";

const Header = styled.div`
    width: 100%;
    height: 50px;
`

const HeaderText = styled.h1`
    font-size: 30px;
    padding-left: 20px;
`

export const BorrowHeader = () => {
    return(
        <Header>
            <HeaderText>Borrow</HeaderText>
        </Header>
    )
}