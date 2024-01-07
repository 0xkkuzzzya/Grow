import styled from "styled-components";

const BalanceBlock = styled.div`
    width: 80%;
    margin-top: 0px;
`

const BalanceInfoText = styled.a`
    font-size: 40px;
    font-weight: 700;
`

const Usq = styled.a`
    font-size: 25px;
    font-weight: 700;
`


export const BalanceInfoBlock = () => {

    let BalanceText = <BalanceInfoText>0.00 <Usq>USQ</Usq></BalanceInfoText>

    return(
        <BalanceBlock>
            {BalanceText}
        </BalanceBlock>
    )
}