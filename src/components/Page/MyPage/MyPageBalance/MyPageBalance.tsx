import styled from "styled-components";
import { TokenFieldBalance } from "./TokenFieldBalance/TokenFieldsBalance";

const BalanceBlock = styled.div`
    width: 100%;
    margin-top: 20px;
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
`


export const MyPageBalance = () => {
    return(
        <BalanceBlock>
            <InfoBlock>
                <AssetsBlock> <Text>Assets</Text> </AssetsBlock>
                <PriceBlock> <Text>Price(USQ)</Text> </PriceBlock>
                <AmountBlock> <Text>Amount</Text> </AmountBlock>
            </InfoBlock>
            <TokenFieldBalance></TokenFieldBalance>
        </BalanceBlock>
    )
}