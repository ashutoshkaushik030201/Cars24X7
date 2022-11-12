import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes }  from "react-router-dom";
import Main from './pages/Main';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Main/Dashboard';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path = "/login" element = {<LoginPage/>}/>
          <Route path = "/"  element = {<Main/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            {/* <Route path='sentiment' element={<Sentiment/>}/> */}
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
