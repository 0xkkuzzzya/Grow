import { useState } from "react";
import styled from "styled-components";
import { MyPageBalance } from "../MyPageBalance/MyPageBalance";
import { MyPageDeposit } from "../MyPageDeposit/MyPageDeposit";
import { MyPageBorrow } from "../MyPageBorrow/MyPageBorrow";

const HeaderBlock = styled.div`
    width: 100%;
    margin-top: 30px;
`

const ButtonBlock = styled.div`
    display: flex;
    align-items: center;
    
`

const ButtonLink = styled.button`
    max-width: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px;
    font-weight: 700;
    outline: none;
    font-family: 'Inter', sans-serif;
    @media (max-width: 500px) {
        font-size: 25px;
    }
`

const DynamicUndeBlock = styled.div`
    width: 100%;
    border: 1px solid rgba(87, 187, 242, 1);
    border-radius: 20px;
    margin-top: 10px;
`


export const MyPageHeader = () => {

    const [block, setBlock] = useState('Balance')

    const greyText: string = "rgba(192, 192, 192, 1)"
    const underline: string = "underline 2px solid rgba(87, 187, 242, 1)"
    
    return(
        <HeaderBlock>
            <ButtonBlock>
                <ButtonLink 
                onClick={() => {setBlock('Balance')}}
                style={{
                    color: block == 'Balance' ? 'black' : greyText,
                    textDecoration: block == 'Balance' ? underline : ''
                }}>Balance</ButtonLink>
                <ButtonLink 
                onClick={() => {setBlock('Deposit')}} 
                style={{marginLeft: "20px",
                    color: block == 'Deposit' ? 'black' : greyText,
                    textDecoration: block == 'Deposit' ? underline : ''
                }}>Deposit</ButtonLink>
                <ButtonLink 
                onClick={() => {setBlock('Borrow')}} 
                style={{marginLeft: "20px",
                    color: block == 'Borrow' ? 'black' : greyText,
                    textDecoration: block == 'Borrow' ? underline : ''
                }}>Borrow</ButtonLink>
            </ButtonBlock>
            <DynamicUndeBlock></DynamicUndeBlock>
            <div>
                {block == 'Balance' && <MyPageBalance/>}
                {block == 'Deposit' && <MyPageDeposit/>}
                {block == 'Borrow' && <MyPageBorrow/>}
            </div>
        </HeaderBlock>
    )
}