import styled from "styled-components";
import { ConnectModal } from "../../Modal/CoonectModal/ConnectModal";

const ButtonConnect = styled.div`
    max-width: 100%;
    height: 35px;
    background: linear-gradient(to left, #3B9CFC, #6CBBFF);
    color: black;
    font-family: 'Metropolis', sans-serif;
    border-radius:15px;
    border:none;
    margin-right: 20px;
    cursor: pointer;
    color: black;
    margin-left: auto;
    @media (max-width: 500px) {
        margin-right: 20px;
    }
    @media (min-width: 950px) {
        margin-right: 50px;
    }
`


export const ConnectButton = () => {
    return(
        <ButtonConnect>
            <ConnectModal></ConnectModal>
        </ButtonConnect>
    )
}