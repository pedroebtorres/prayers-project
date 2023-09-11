import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import Login from './pages/LoginPage';
import Choose from './pages/ChoosePage';
import Prayer from './pages/PrayerPage';
import OrderPrayer from './pages/OrderPrayerPage';
import OrderDone from './pages/OrderDonePage';

function App() {
  return (
    <LoginProvider>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/choose" element={ <Choose /> } />
        <Route exact path="/prayer" element={ <Prayer /> } />
        <Route exact path="/order-done" element={ <OrderDone /> } />
        <Route exact path="/order-prayer" element={ <OrderPrayer /> } />
      </Routes>
    </LoginProvider>
  );
}

export default App;
