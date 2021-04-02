import React, { Component } from 'react';

import AccountAdmin from './UserAccount';
import Orderlist from './orderlist'
import { _Auth } from '../../firebase_config/config';
import AddPost from './AdminPanel/post';

export default class Panel extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: null,
        _isAuth: false,
        _google: false,
      }
      /* 
користувач містить ідентифікатор користувача false, якщо він не ввійшов в систему
         _isAuth може бути true, або false, залежно від статусу входу
      */
    }
  
    componentDidMount() {
      _Auth.onAuthStateChanged((user) =>
      {if (user /* && user.emailVerified */)
        {
          this.setState({ user: user.email, _isAuth: true, });
        }
        else
        {
          this.setState({ user: null, _isAuth: false, _google: false, });
          //  повідомлення попередження користувача про те, що спроба входу не вдалася 
           // => додано попередження
        }
      });
    }
  
    render() {
      return (
        <div>
  
          <header className="App-header">
            <div>
              <AccountAdmin _login={this.state._isAuth} _user={this.state.user} that={this}/>
            </div>
          </header>
  
          <div className="App-content" >
            <Orderlist _user={this.state.user} _google={this.state._google}/>
            {/* передає ідентифікатор користувача (електронну адресу) до списку замовлень */}
          </div>
          <AddPost/>
  
        </div>
      );
    }
  }