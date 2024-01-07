import styled from "styled-components";

const MyHeader = styled.div`
    width: 100%;
`

const HeaderText = styled.h1`
    
`


export const MyPageHeader = () => {
    return(
        <MyHeader>
            <HeaderText>My Page</HeaderText>
        </MyHeader>
    )
}