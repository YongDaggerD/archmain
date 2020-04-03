import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashbord from './components/Dashbord/Dashbord';
import Training from './components/Training/Training';
import Table from './components/Dashbord/Table/Table';


const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Nav />
        <div className="wrapper-right">
          <Header />
          <div className="wrapper-right-bloks">
            <div className="wrapper-content">
              <Route path='/dashbord' component={Dashbord} />
              <Route path='/training' component={Training} />
              {/* <Route path='/duel' component={} /> */}
              <Route path='/table' component={Table} />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </BrowserRouter>);
}

export default App;