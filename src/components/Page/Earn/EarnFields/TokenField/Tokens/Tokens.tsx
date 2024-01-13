import styled from "styled-components";
import USQLogo from '../../../../../../assets/svg/USQLogo.svg'
import ATOMLogo from '../../../../../../assets/svg/AtomLogo.svg'
import QUBELogo from '../../../../../../assets/svg/QubeLogo.svg'
import OSMOLogo from '../../../../../../assets/svg/OsmoLogo.svg'

const TokensBlock = styled.div`
    max-width: 100%;
    height: 100%;
    margin-left: 15px;
    display: flex;
    align-items: center;
`

const TokensImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px;
`

const TokensName = styled.h1`
    font-size: 20px;
    margin-left: 5px;
`

const TokensProto = styled.div`
    max-width: 100%;
    border: 1px solid #EEEEEE;
    margin-left: 10px;
    padding: 3px 11px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`

const TokensProtoText = styled.a`
    color: #3B9CFC;
    font-weight: 700;
    font-size: 12px;
`

const USQProto = styled.div`
    max-width: 100%;
    border: 0.18rem solid #3B9CFC;
    margin-left: 24px;
    padding: 2px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`


export const EarnUSQToken = () => {
    return(
        <TokensBlock>
            <TokensImg src={USQLogo}></TokensImg>
            <TokensName>USQ</TokensName>
            <USQProto>
                <TokensProtoText>Grow</TokensProtoText>
            </USQProto>
        </TokensBlock>
    )
}

export const EarnATOMToken = () => {
    return(
        <TokensBlock>
            <TokensImg src={ATOMLogo}></TokensImg>
            <TokensName>ATOM</TokensName>
            <TokensProto>
                <TokensProtoText>Lend</TokensProtoText>
            </TokensProto>
        </TokensBlock>
    )
}

export const EarnQUBEToken = () => {
    return(
        <TokensBlock>
            <TokensImg src={QUBELogo}></TokensImg>
            <TokensName>QUBE</TokensName>
            <TokensProto>
                <TokensProtoText>Lend</TokensProtoText>
            </TokensProto>
        </TokensBlock>
    )
}

export const EarnOSMOToken = () => {
    return(
        <TokensBlock>
            <TokensImg src={OSMOLogo}></TokensImg>
            <TokensName>OSMO</TokensName>
            <TokensProto>
                <TokensProtoText>Lend</TokensProtoText>
            </TokensProto>
        </TokensBlock>
    )
}