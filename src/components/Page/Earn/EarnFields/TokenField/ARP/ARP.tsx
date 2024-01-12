import styled from "styled-components";

const ARPBlock = styled.div`
    max-width: 100%;
    height: 100%;
    margin-right: 15px;
    display: flex;
    align-items: center;
`

const ARPText = styled.a`
    font-size: 20px;
    font-weight: 700;
    color: #44A884;
`


export const USQARP = () => {
    return(
        <ARPBlock>
            <ARPText>16.4%</ARPText>
        </ARPBlock>
    )
}
export const ATOMARP = () => {
    return(
        <ARPBlock>
            <ARPText>20.1%</ARPText>
        </ARPBlock>
    )
}
export const QUBEARP = () => {
    return(
        <ARPBlock>
            <ARPText>5.9%</ARPText>
        </ARPBlock>
    )
}
export const OSMOARP = () => {
    return(
        <ARPBlock>
            <ARPText>12.28%</ARPText>
        </ARPBlock>
    )
}