import styled from "styled-components";

const LiquidationBLock = styled.div`
    width: 100%;
`

const TestText = styled.h1`
    font-size: 30px;
`

export const Liquidation = () => {
    return(
        <LiquidationBLock>
            <TestText>Liquidation</TestText>
        </LiquidationBLock>
    )
}