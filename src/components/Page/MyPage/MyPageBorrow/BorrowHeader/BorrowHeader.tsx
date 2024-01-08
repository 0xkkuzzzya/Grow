import styled from "styled-components";

const HeaderBlock = styled.div`
    width: 80%;
    margin-top: 10px;
`

const HeaderText = styled.h1`
    font-size: 25px;
`


export const BorrowHeader = () => {
    return(
        <HeaderBlock>
            <HeaderText>Borrow</HeaderText>
        </HeaderBlock>
    )
}