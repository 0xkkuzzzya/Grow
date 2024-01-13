import styled from "styled-components";

const MyHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const HeaderContrainer = styled.div`
    width: 80%;
`

const HeaderText = styled.h1`
    font-size: 30px;
`


export const MyPageHeader = () => {
    return(
        <MyHeader>
            <HeaderContrainer>
                <HeaderText>My Page</HeaderText>
            </HeaderContrainer>
        </MyHeader>
    )
}