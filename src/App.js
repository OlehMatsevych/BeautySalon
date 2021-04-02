/*
  Головний файл, в якому викликаються інші компоненти 
*/

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LOGIN from './components/LogIN/registr'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';    //використовуємо для маршрутизації 
import Home from './components/Home/Home';
import React from 'react';
import createUser from './components/Registration/Registration';
import Account from './components/Account/Account';
import AdminMan from './components/Account/AdminPanel/AdminManegement';
import UserList from './components/Account/AdminPanel/UserList';
import EmployeeList from './components/Account/AdminPanel/EmployeeList';
import SwipeComp from './components/SwipeComp';

export default class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="main-container">
            <Switch>                            {/* додаємо маршрути для компонент*/}
              <Route exact path='/' component={Home} />
              <Route path='/registration' component={createUser} />
              <Route path='/account' component={Account}/>
              <Route path='/admin' component={AdminMan}/>
            </Switch>
          </div>
          <SwipeComp/>
          <Footer />
        </div>
      </Router>
    );
  }
}