import styled from "styled-components";
import { Input } from "../Input/Input";
import { ModalColl } from "../../../../Modal/BorrowModal/ModalColl.tsx/ModalColl";

const Coll = styled.div`
    width: 90%;
    height: 60px;
    margin-top: 60px;
`

const TextColl = styled.div`
    font-size: 15px;
    color: #BABABA;
    font-weight: 700;
    margin-bottom: 10px;
`

const FieldCool = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid #EEEEEE;
    border-radius: 20px;
    display: flex;
    align-items: center;
`

const TokenBlock = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
`

export const Collateral = () => {
    return(
        <Coll>
            <TextColl>Collateral</TextColl>
            <FieldCool>
                <TokenBlock>
                    <ModalColl/>
                </TokenBlock>
                <Input></Input>
            </FieldCool>
        </Coll>
    )
}