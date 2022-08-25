import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home.js';
import MCAT from './Pages/Projects/MCATPrepGame.js';
import Split from './Pages/Projects/Split.js';
import YouFirst from './Pages/Projects/YouFirst.js';
import SpeedStocks from './Pages/Projects/SpeedStocks.js';
import RuneScape from './Pages/Projects/RuneScape.js';
import PasswordGenerator from './Pages/Projects/PasswordGenerator.js';
import NoPage from './Pages/NoPage.js';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/projects/mcatprepgame' element={<MCAT />}></Route>
      <Route path='/projects/split' element={<Split />}></Route>
      <Route path='/projects/youfirst' element={<YouFirst />}></Route>
      <Route path='/projects/speedstocks' element={<SpeedStocks />}></Route>
      <Route path='/projects/runescape' element={<RuneScape />}></Route>
      <Route path='/projects/passwordgenerator' element={<PasswordGenerator />}></Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default Main;