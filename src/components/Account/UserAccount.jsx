/***********************
 * 
 *     файл, в якому реалізовану компоненту входу у власний кабінет
 * 
 * 
 **********************/


import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import {
    _Auth,
    _googleLogin
} from '../../firebase_config/config';

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './Account.css'

export default class USER extends Component {
    constructor(props) {
        super(props);
        this.state = {               // <--------    
            email: '',               //         |
            password: '',            //         |
        };                          //          |
    }                               //          |
    _handleChange = (e) => {        //обробник змін, який сетить наші state 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    _login = (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        _Auth.signInWithEmailAndPassword(email, password)
            .catch((err) => {
                alert('Невдала спроба');
                console.log('login failed: ' + err);
                
                /*
                надрукуємо повідомлення про помилку в консолі та попередити користувача, коли вхід не вдається
                */
            });

    }

    _logout = (e) => {      // ДЛЯ КНОПКИ   'ВИХІД'
        e.preventDefault();
        return _Auth.signOut()
            .then((res) => console.log(res))
            .catch(err => alert('error: ' + err));
    }
    _googleLogin = (e) => {     //вхід з допомогою Google, реалізовано через  Google API та Firebase
        e.preventDefault();

        _googleLogin().then(result => {
            let token = result.credential.accessToken;
            console.log(token);
            let user = result.user;
            console.log(user);

            this.props.that.setState({
                _google: true,
            })
        });
    }
    render() {
        const errorMessage = (
            <p style={{ color: 'red' }}>Пароль не є правильним, або аккаунту не існує</p>
        )
        const _login_dialog = { 
            width: '50%',
            height: '75%',
            marginTop: '-20%',
            marginLeft: '-25%',
        }   //параметри стилів для діалогового вікна(модального)

        if (!this.props._login) {
            /*
                відображає кнопку входу, переданий прапор _login хибний
            */
            return (
                <div className='row align-items-center'>
                    {/*SkyLight використовується для модального вікна */}
                    <SkyLight dialogStyles={_login_dialog} hideOnOverlayClicked ref="login_dialog">
                        <div className='RegisterContainer'>
                            <img className="SalonImg" src="https://www.tpray.in.net/wp-content/uploads/2019/10/file.jpg" alt="img" />

                            <MDBContainer className='registration' >
                                <form onSubmit={(e) => this.loginUser(e)} >
                                    <MDBRow>
                                        <MDBCol md="6">
                                            <MDBCard>
                                                <MDBCardBody className="mx-4">
                                                    <div className="text-center">
                                                        <h3 className="dark-grey-text mb-5">
                                                            <strong>Увійти</strong>
                                                        </h3>
                                                    </div>
                                                    <MDBInput
                                                        label="Ваша електронна пошта"
                                                        group
                                                        type="email"
                                                        validate
                                                        error="wrong"
                                                        success="right"
                                                        name='email'
                                                        onChange={this._handleChange} value={this.state.email}
                                                    />
                                                    <MDBInput
                                                        label="Ваш пароль"
                                                        group
                                                        type="password"
                                                        validate
                                                        containerClass="mb-0"
                                                        onChange={this.handleChange}
                                                        required
                                                        name='password'
                                                        onChange={this._handleChange} value={this.state.password}
                                                    />
                                                    <div className="text-center mb-3">
                                                        <MDBBtn
                                                            type="submit"
                                                            gradient="blue"
                                                            rounded
                                                            className="btn-block z-depth-1a"
                                                            onClick={this._login}
                                                        >
                                                            Увійти
                                        </MDBBtn>
                                                        {this.state.errorMessage === true ? errorMessage : null}
                                                    </div>
                                                </MDBCardBody>
                                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                                    <p className="font-small grey-text d-flex justify-content-end">
                                                        Не маєте власного кабінету?
                            <a href="#!" className="blue-text ml-1" href='/registration'>

                                                            Зареєструватися
                            </a>        {/* перекидаємо на форму реєстрації*/}
                                                    </p>
                                                </MDBModalFooter>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                </form>
                            </MDBContainer>
                        </div>
                        <div>
                            <p style={{fontSize: "0.65em"}} className="text-secondary">
                                ******************<br />
                            Тестовий аккаунт<br />
                            Логін: test@test.com<br />
                            Пароль: 123456<br />
                            ******************<br />
                            </p>
                        </div>

                    </SkyLight>

                    <div>
                        <button className="btn btn-dark btn-sm" onClick={() => this.refs.login_dialog.show()}>Увійти</button>
                    </div>

                    <div>
                        <button className="btn btn-dark btn-sm" onClick={this._googleLogin}>Увійти з допомогою Google</button>
                    </div>

                </div>
            )
        } else return (
            /*
                відображається ім'я користувача / кнопку виходу
            */
            <div className="logoutBlock" >
                {/*
                <a>{this.props._user}</a>
                */}
                <h2>Особистий кабінет</h2> 
                <button className="logoutBtn btn btn-light" onClick={this._logout}>Вийти</button>
            </div>
        )
    }
}