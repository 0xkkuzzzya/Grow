import styled from "styled-components";
import { TokenFieldBorrow } from "./TokenFieldBorrow/TokenFieldBorrow";
import { useMediaQuery } from "react-responsive";

const DepositBlock = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 10px;
`

const InfoBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    margin-right: 15px;
`

 
export const MyPageBorrow = () => {

    const isDes = useMediaQuery({
        query: "(min-device-width: 570px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 570px)",
    });

    return(
        <DepositBlock>
             <InfoBlock>
             <AssetsBlock> <Text>Assets</Text> </AssetsBlock>
                {isMob && <PriceBlock> <Text>Amount(USQ)</Text> </PriceBlock>}
                {isDes && <PriceBlock> <Text style={{marginLeft: "-22.8em"}}>Amount(USQ)</Text> </PriceBlock>}
            </InfoBlock>
            <TokenFieldBorrow/>
        </DepositBlock>
    ) 
}