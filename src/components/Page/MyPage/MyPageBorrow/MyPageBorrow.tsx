import styled from "styled-components";
import { TokenFieldBorrow } from "./TokenFieldBorrow/TokenFieldBorrow";

const DepositBlock = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 30px;
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


export const MyPageBorrow = () => {
    return(
        <DepositBlock>
             <InfoBlock>
                <AssetsBlock> <Text>Assets</Text> </AssetsBlock>
                <PriceBlock> <Text>Amount(USQ)</Text> </PriceBlock>
                <AmountBlock style={{width: "90px"}}> <Text><br></br></Text> </AmountBlock>
            </InfoBlock>
            <TokenFieldBorrow/>
        </DepositBlock>
    ) 
}