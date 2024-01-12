import styled from "styled-components";

const SearchBlock = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: 15px;
`

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    background: #FAFAFA;
    border: 1px solid #e5e5e5;
    color: #BABABA;
    font-size: 17px;
    font-weight: 700;
    border-radius: 20px;
    outline: none;
    padding: 0px 20px;
`

export const EarnSerach = () => {
    return(
        <SearchBlock>
            <SearchInput placeholder="Search"></SearchInput>
        </SearchBlock>
    )
}