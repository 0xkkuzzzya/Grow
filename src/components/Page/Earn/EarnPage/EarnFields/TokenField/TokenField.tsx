import styled from "styled-components";
import { EarnUSQToken } from "./Tokens/Tokens";
import { USQAPR } from "./APR/ARP";
import { useAccordionEarn } from '../../../../../../hooks/useAccordionEarn';
import { EarnCastomLink } from "../../../EarnCastomLink/EarnCastomLink";


const AccordionBlock = styled.div <{height: string}>`
    width: 100%;
    max-height: ${props => props.height};
    display: flex;
    flex-direction: column;
    border: 2px solid #eee;
    border-radius: 15px;
    transition: max-height .3s ease-in-out;
    overflow: hidden;
    padding-bottom: 10px;
    cursor: pointer;
`

const ButtonsBlock = styled.div`
    width: 100%;
    
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
`

const TokenFieldBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`

const EarnDepositButton = styled.button `
    width: 130px;
    height: 100%;
    color: white;
    border: none;
    border-radius: 50px;
    background: linear-gradient(to right, #3B9CFC, #6CBBFF);
    margin-right: 20px;
    margin-top: 5px;
    padding: 7px 15px;
    font-weight: 700;
    font-family: 'Metropolis', sans-serif;
    font-size: 15px;
    transition: all .3s ease-in-out;
    cursor: pointer;
`

const EarnWithdrawalButton = styled.button`
    width: 130px;
    height: 100%;
    color: #3B9CFC;
    border: 2px solid #3B9CFC;
    border-radius: 50px;
    background:transparent;
    margin-left: 20px;
    margin-top: 5px;
    padding: 7px 15px;
    font-weight: 700;
    font-family: 'Metropolis', sans-serif;
    font-size: 15px;
    transition: all .3s ease-in-out;
    cursor: pointer;
`

export const USQField = () => {

    const [eAccordion, setEAccordion] = useAccordionEarn();

    function openAccordion () {
        if(eAccordion.active == false) {
            setEAccordion({
                active: true,
                height: '170px',
            })
        } else if (eAccordion.active == true) {
            setEAccordion({
                active: false,
                height: '55px',
            })
        }
    }

    return(
        <AccordionBlock height={eAccordion.height} onClick={openAccordion}>
            <TokenFieldBlock>
                <EarnUSQToken/>
                <USQAPR/>
            </TokenFieldBlock>
            <ButtonsBlock >
                <EarnCastomLink to="/deposit">
                    <EarnDepositButton>Deposit</EarnDepositButton>
                </EarnCastomLink>
                <EarnCastomLink to="/withdrawal">
                    <EarnWithdrawalButton>Withdrawal</EarnWithdrawalButton>
                </EarnCastomLink>
            </ButtonsBlock>
        </AccordionBlock>
    )
}
