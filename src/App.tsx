import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { Borrow } from './components/Page/Borrow/Borrow';
import { Earn } from './components/Page/Earn/Earn';
import { Liquidation } from './components/Page/Liquidation/Liquidation';
import { MyPage } from './components/Page/MyPage/MyPage';

import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Page/HomePage/HomePage';


const AppPage = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <>
    <AppPage>
      <Header/>
      <Routes>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/MyPage" element={<MyPage/>}/>
        <Route path="/Borrow" element={<Borrow/>}/>
        <Route path="/Earn" element={<Earn/>}/>
        <Route path="/Liquidation" element={<Liquidation/>}/>
      </Routes>
    </AppPage>
    </>
  );
}

export default App;
