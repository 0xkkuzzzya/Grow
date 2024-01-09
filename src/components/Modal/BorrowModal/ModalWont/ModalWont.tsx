import styled from "styled-components";
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { animated } from '@react-spring/web';
import { useShowWalletModal } from "../../../../hooks/useStoreModal";
import CosmosLogo from '../../../../assets/svg/CosmosLogo.svg'
import QubeLogo from '../../../../assets/svg/QubeLogo.svg'
import ArrowBlack from '../../../../assets/svg/ArrowBlack.svg'

const ModalDialogOverlay = animated(DialogOverlay);
const StyledDialogOvelay = styled(ModalDialogOverlay) `
    &[data-reach-dialog-overlay] {
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

const ModalBlock = styled.div`
    display: flex;
    align-items: center;
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
    font-size: 18px;
    font-weight: 600;
    padding: 0;
    white-space: nowrap;
    margin-left: 20px;
    display: flex;
    align-items: center;
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

const Logo = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-right: 10px;
`

const Arrow = styled.img`
    width: 13px;
    height: 13px;
    margin-top: -5px;
    margin-left: 5px;
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


export const ModalWont = () => {

    const [ walletModalStatus, setWalletModalStatus ] = useShowWalletModal();

    const open = () => {setWalletModalStatus({b: true})};
    const close = () => {setWalletModalStatus({b: false})};

    return (
      <ModalBlock>
        
        <OpenButton onClick={open}>
        <Logo src={CosmosLogo}></Logo>
           ATOM
        <Arrow src={ArrowBlack}></Arrow>
            </OpenButton>
        <StyledDialogOvelay isOpen={walletModalStatus.b}  onDismiss={close}>
            <StyledDialogContent>
                <CloseDiv>              
                    <CloseButton onClick={close}>
                    <span aria-hidden>×</span>
                    </CloseButton>
                </CloseDiv>
                <ContentDiv></ContentDiv>
            </StyledDialogContent>
        </StyledDialogOvelay>
      </ModalBlock>
    );
}