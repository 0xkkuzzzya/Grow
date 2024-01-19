import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';
import KeplrLogo from '../../../assets/svg/Keplr.svg'
import { animated } from '@react-spring/web';
import { ConnectWallets } from '../../Wallets/ConnetsWallets/ConnectWallets';
import { useConnectKeplrWalletStore } from '../../../hooks/useConnectKeplrWalletStore';
import { useWallet } from '../../../hooks/useWallet';
import { useShowWalletModal } from '../../../hooks/useShowModal';
import { useColorConnect } from '../../../hooks/useColorConnect';

const ModalDialogOverlay = animated(DialogOverlay);
const StyledDialogOvelay = styled(ModalDialogOverlay) `
    &[data-reach-dialog-overlay] {
        z-index: 1;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        overflow: auto;
        display:flex;
        align-items: center;
        justify-content: center; 
        transition: background-color 3s;
        background-color: rgba(0,0,0,.45);
    }
`

const CloseButton = styled.button`
    width: 20px;
    font-size: 35px;
    margin-top: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #333;
    margin-left: 90%;
    outline: none;
    
`

const OpenButton = styled.button <{color: string, border: string}>`
    max-width:100%;
    background: ${props => props.color};
    border: ${props => props.border};
    outline: none;
    cursor: pointer;
    border-radius: 50px;
    font-family: 'Metropolis', sans-serif;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 20px;
    white-space: nowrap;
    margin-left: auto;
    color: #000;
    @media (max-width: 500px) {
        font-size: 15px;
        padding: 10px 20px;
    }
`



const ConnectText = styled.a`
    margin-top: 0px; 
`

const CloseDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: white;
`

const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    @media (max-width: 500px) {
        flex-direction: column;
        }
`

const WalletList = styled.div`
    width: 100%;
    height: 100%;
`

const LogoKeplr = styled.img`
    width: 20px;
    height: 20px;
    margin-top: -2px;
    margin-right: 5px;
`

const ConnectBlock = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`


const ModalDialogContent = animated(DialogContent);
const StyledDialogContent = styled(ModalDialogContent)`
    &[data-reach-dialog-content] {
        background-color: rgb(245,245,245);
        width: 535px;
        height: 350px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        border: 2px solid #dbdbdb;
        margin-top: -10px;
        position: relative;
        outline: none;
        @media (max-width: 500px) {
            width: 335px;
            height: 600px;
        }
        @media (max-width: 330px) {
            width: 305px;
        }
    }
`


export const ConnectModal = () => {

    const open = () => {setWalletModalStatus({b: true})};
    const close = () => {setWalletModalStatus({b: false})};

    let BackgroundConnectButton = 'linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255))';
    var walletAddr: string = "";

    const [ connectWallet, setConnectKeplrWalletStore ] = useConnectKeplrWalletStore();
    const [ wallet, setWallet ] = useWallet();
    const [ walletModalStatus, setWalletModalStatus] = useShowWalletModal();

    const disconnect = () => {
        setWallet({
            init: false,
            wallet: null,
            type: ""
        });
        setConnectKeplrWalletStore({
            connected: false
        })
        close()
    }

    
    if(wallet.type == "keplr") {
        walletAddr =  'qube...' + String(wallet.wallet.bech32Address).slice(38,43);
    } 
    

    return (
      <div>
        <OpenButton onClick={wallet.init == false? open : disconnect} 
        color={connectWallet.connected == true ? 'transparment' : BackgroundConnectButton} 
        border={connectWallet.connected == true ? '2px solid #6CBBFF' : 'none' }>
            {walletAddr == "" || undefined ? "Connect Wallet" : <ConnectBlock>  <LogoKeplr src={KeplrLogo}/>  {walletAddr} </ConnectBlock>}
        </OpenButton>
        <StyledDialogOvelay isOpen={walletModalStatus.b && !connectWallet.connected} onDismiss={close}>
            <StyledDialogContent>
                <CloseDiv>              
                    <CloseButton onClick={close}>
                    <span aria-hidden>×</span>
                    </CloseButton>
                </CloseDiv>
                <ContentDiv>
                    <WalletList>
                        <ConnectWallets></ConnectWallets>
                    </WalletList>
                </ContentDiv>
            </StyledDialogContent>
        </StyledDialogOvelay>
      </div>
    );
}