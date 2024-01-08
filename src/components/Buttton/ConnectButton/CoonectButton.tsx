import styled from "styled-components";
import { ConnectModal } from "../../Modal/CoonectModal/ConnectModal";

const ButtonConnect = styled.div`
    max-width: 100%;
    height: 35px;
    background: linear-gradient(to right, #77bff9, #2d96ff);
    color: black;
    font-family: 'Metropolis', sans-serif;
    border-radius:15px;
    border:none;
    margin-right: 50px;
    cursor: pointer;
    margin-left: auto;
    @media (max-width: 500px) {
        margin-right: 20px;
    }
`


export const ConnectButton = () => {
    return(
        <ButtonConnect>
            <ConnectModal></ConnectModal>
        </ButtonConnect>
    )
}