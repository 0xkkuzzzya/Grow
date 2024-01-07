import styled from "styled-components";
import { Input } from "../Input/Input";
import { ModalWont } from "../../../../Modal/BorrowModal/ModalWont/ModalWont";

const Wont = styled.div`
    width: 90%;
    height: 60px;
`

const TextWont = styled.div`
    font-size: 15px;
    color: #BABABA;
    font-weight: 700;
    margin-bottom: 10px;
`

const FieldWont = styled.div`
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

export const WontTo = () => {
    return(
        <Wont>
            <TextWont>I wont to borrow</TextWont>
            <FieldWont>
                <TokenBlock>
                    <ModalWont/>
                </TokenBlock>
                <Input></Input>
            </FieldWont>
        </Wont>
    )
}