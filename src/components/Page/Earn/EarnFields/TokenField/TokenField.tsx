import styled from "styled-components";
import { EarnUSQToken } from "./Tokens/Tokens";
import { USQARP } from "./ARP/ARP";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Fade from '@mui/material/Fade';


const AccordionBlock = styled.div`
    width: 100%;
`

const ButtonsBlock = styled.div `
    width: 100%;
    max-height: 100%;
    transition: max-height .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 0;
`

const EarnDepositButton = styled.button `
    width: 130px;
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
`

const EarnWithdrawalButton = styled.button`
    width: 130px;
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
`

const Accordion = styled(MuiAccordion)(() => ({
    
  }));

const TokenFieldBlock = styled(AccordionSummary)(({ theme }) => ({
    
  }));

const useStylesSummary = makeStyles({
    content: {
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0px'
    }
  });


export const USQField = () => {
    const summary = useStylesSummary();
    return(
    <AccordionBlock>
        <Accordion
            TransitionProps={{ timeout: 200 }}
            sx={{ 
                boxShadow: 0,
                border: '2px solid #eee'
            }}>
            <TokenFieldBlock
            aria-controls="panel2-content"
            classes={{ content: summary.content }}
            sx={{ 
                padding: '0',
            }}
            >
                <EarnUSQToken/>
                <USQARP/>
            </TokenFieldBlock>
            <ButtonsBlock>
                <EarnDepositButton>Deposit</EarnDepositButton>
                <EarnWithdrawalButton>Withdrawal</EarnWithdrawalButton>
            </ButtonsBlock>
        </Accordion>
      </AccordionBlock>
    )
}
