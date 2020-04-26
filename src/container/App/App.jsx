import React from 'react'; 
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../../сomponent/Header';
import Sidebar from '../../сomponent/Sidebar';
import Employees from '../../pages/Employees/';
import 'bootstrap/dist/css/bootstrap.min.css';

import s from './App.module.scss'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header /> 
        <Route path="/" component={() => {
          return (<div className={s.conteiner}>
                    <Sidebar />
                    <Employees />
                  </div>)
        }}/>
        
      </BrowserRouter>
    </>
  );
}

export default App;
