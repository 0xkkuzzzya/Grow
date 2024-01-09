import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { ConnectWallets } from '../../Wallets/ConnetsWallets/ConnectWallets';
import { useConnectKeplrWalletStore } from '../../../hooks/useConnectKeplrWalletStore';
import { useWallet } from '../../../hooks/useWallet';
import { useShowWalletModal } from '../../../hooks/useShowModal';

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

const OpenButton = styled.button`
    max-width:100%;
    background:transparent;
    border:none;
    outline: none;
    cursor: pointer;
    border-radius: 50px;
    font-family: 'Metropolis', sans-serif;
    font-size: 17px;
    font-weight: 600;
    padding: 8px 20px;
    white-space: nowrap;
    margin-left: auto;
    @media (max-width: 500px) {
        font-size: 15px;
        padding: 9px 20px;
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


    let walletAddr: string = "";

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
        walletAddr =  'qube...' + String(wallet.wallet.bech32Address).slice(36,43);
    }

    return (
      <div>
        <OpenButton onClick={wallet.init == false? open : disconnect}>
            {walletAddr == "" || undefined ? "Connect Wallet" : walletAddr}
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