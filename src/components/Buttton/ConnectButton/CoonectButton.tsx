import styled from "styled-components";
import { ConnectModal } from "../../Modal/CoonectModal/ConnectModal";
import { useWallet } from "../../../hooks/useWallet";
import { useConnectKeplrWalletStore } from "../../../hooks/useConnectKeplrWalletStore";
import { useColorConnect } from "../../../hooks/useColorConnect";

const ButtonConnect = styled.div `
    max-width: 100%;
    height: 35px;
    background: linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255));
    border: none;
    color: black;
    font-family: 'Metropolis', sans-serif;
    border-radius:15px;
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

    const [color, setColor] = useColorConnect();

    return(
        <ButtonConnect>
            <ConnectModal></ConnectModal>
        </ButtonConnect>
    )
}