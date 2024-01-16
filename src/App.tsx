import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { Borrow } from './components/Page/Borrow/Borrow';
import { Earn } from './components/Page/Earn/EarnPage/Earn';
import { Liquidation } from './components/Page/Liquidation/Liquidation';
import { MyPage } from './components/Page/MyPage/MyPage';
import '@typehaus/metropolis/700.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Page/HomePage/HomePage';
import { EarnDeposit } from './components/Page/Earn/EarnDeposit/EarnDeposit';


const AppPage = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'Metropolis', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-tap-highlight-color: transparent;
`

function App() {
  return (
    <>
    <AppPage>
      <Header/>
      <Routes>
        <Route path="/deposit" element={<EarnDeposit/>}/>
        <Route path="/withdrawal" element={<EarnDeposit/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/my" element={<MyPage/>}/>
        <Route path="/borrow" element={<Borrow/>}/>
        <Route path="/earn" element={<Earn/>}/>
        <Route path="/liquidation" element={<Liquidation/>}/>
      </Routes>
    </AppPage>
    </>
  );
}

export default App;
