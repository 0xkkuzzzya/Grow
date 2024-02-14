import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { TokenFieldBalanceDesktop, TokenFieldBalanceMobile } from "./TokenFieldBalance/TokenFieldsBalance";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const BalanceBlock = styled.div`
    width: 100%;
    margin-top: 10px;
`


const InfoBlock = styled.div`
    display: flex;
    align-items: center;
    
`

const AssetsBlock = styled.div`
    margin-left: 15px;
`

const Text = styled.a`
    font-size: 14px;
    font-weight: 700;
    color: rgba(186, 186, 186, 1);
`

const PriceBlock = styled.div`
    margin-left: auto;
    margin-right: auto;
`

const AmountBlock = styled.div`
    margin-right: 20px;
    @media (max-width: 500px) {
        margin-left: auto;
    }
`



export const MyPageBalance = () => {
    
    const [theme, setTheme] = useToggleTheme()

    const isDes = useMediaQuery({
        query: "(min-device-width: 500px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 500px)",
    });

    return(
        <BalanceBlock>
            <InfoBlock>
                <AssetsBlock> <Text>Assets</Text> </AssetsBlock>
                {isDes && <PriceBlock> <Text>Price(USQ)</Text> </PriceBlock>}
                {isMob && <></>}
                <AmountBlock> <Text>Amount</Text> </AmountBlock>
            </InfoBlock>
            {isDes && <TokenFieldBalanceDesktop/>}
            {isMob && <TokenFieldBalanceMobile/>}
            {/* <ContainerBlock >
                <h1 style={{fontSize: "27px"}}>No tokens</h1>
                <h3 style={{marginTop: "-15px"}}>Looks like you dont have any tokens yet.</h3>
            </ContainerBlock> */}
        </BalanceBlock>
    )
}