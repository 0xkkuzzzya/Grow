import styled from "styled-components";
import USQLogo from '../../../../../../../assets/svg/USQLogo.svg'
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
    font-weight: 800;
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

