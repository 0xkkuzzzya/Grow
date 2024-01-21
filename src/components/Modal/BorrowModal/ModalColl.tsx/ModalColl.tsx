import styled from "styled-components";
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { animated } from '@react-spring/web';
import { useShowWalletModal } from "../../../../hooks/useStoreModal";
import CosmosLogo from '../../../../assets/svg/CosmosLogo.svg'
import QubeLogo from '../../../../assets/svg/QubeLogo.svg'
import ArrowBlack from '../../../../assets/svg/ArrowBlack.svg'
import { useShowModalTo } from "../../../../hooks/useShowModal";

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

const Logo = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
`

const CloseButton = styled.button`
    width: 25px;
    height: 25px;
    font-size: 30px;
    margin-right: 26px;
    margin-top: -10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: black;
    margin-left: auto;
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
    color: black;
`

const CloseButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const ModalText = styled.h4 `
    margin-left: 26px;
    font-size: 20px;
    color: black;
`

const ModalTextBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

const CloseDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
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
        width: 400px;
        height: 500px;
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
            margin-left: 10px;
            margin-right: 10px;
        }
        @media (max-width: 330px) {
            width: 305px;
        }
    }
`


export const ModalColl = () => {

    const [ walletModalStatus, setWalletModalStatus ] = useShowModalTo();

    const open = () => {setWalletModalStatus({b: true})};
    const close = () => {setWalletModalStatus({b: false})};

    return (
      <ModalBlock>
        <OpenButton onClick={open}>
        <Logo src={QubeLogo}></Logo>
           QUBE
        <Arrow src={ArrowBlack}></Arrow>
            </OpenButton>
        <StyledDialogOvelay isOpen={walletModalStatus.b}  onDismiss={close}>
            <StyledDialogContent>
            <CloseDiv>
                    <ModalTextBlock>
                        <ModalText>Select a token</ModalText>
                    </ModalTextBlock>
                    <CloseButtonBlock>
                        <CloseButton onClick={close}>
                        <span aria-hidden>×</span>
                        </CloseButton>
                    </CloseButtonBlock>
                </CloseDiv>
                <ContentDiv></ContentDiv>
            </StyledDialogContent>
        </StyledDialogOvelay>
      </ModalBlock>
    );
}