import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { Borrow } from './components/Page/Borrow/Borrow';
import { Earn } from './components/Page/Earn/Earn';
import { Liquidation } from './components/Page/Liquidation/Liquidation';
import { MyPage } from './components/Page/MyPage/MyPage';
import '@typehaus/metropolis/700.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Page/HomePage/HomePage';


const AppPage = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'Metropolis', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`

function App() {
  return (
    <>
    <AppPage>
      <Header/>
      <Routes>
        <Route path="/homePage" element={<HomePage/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/borrow" element={<Borrow/>}/>
        <Route path="/earn" element={<Earn/>}/>
        <Route path="/liquidation" element={<Liquidation/>}/>
      </Routes>
    </AppPage>
    </>
  );
}

export default App;
