import styled from "styled-components";

const LiquidationBLock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TestText = styled.h1`
    font-size: 30px;
    margin-top: 14em;
    background: linear-gradient(to right, #77bff9, #2d96ff);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 500px) {
        margin-top: 11em;
    }
`

export const Liquidation = () => {
    return(
        <LiquidationBLock>
            <TestText>Soon</TestText>
        </LiquidationBLock>
    )
}