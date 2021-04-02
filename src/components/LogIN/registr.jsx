/* ФАЙЛ, ДЕ РЕАЛІЗОВАНО ВХІД В СИСТЕМУ */



import './registr.css';

import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import firebase from "firebase/app";
require('firebase/auth')

export default class LOGIN extends React.Component {
	constructor() {
		super();
		this.state = {
			user: {
				email: "",
				password: ""
			},
			errorMessage: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.loginUser = this.loginUser.bind(this)
	}

	handleChange(e) {       //обробник змін у формі
		const ogUser = Object.assign({}, this.state.user);
		ogUser[e.target.name] = e.target.value
		this.setState({
			user: ogUser
		})
	}
	loginUser(e) {
		e.preventDefault();
		const user = this.state.user;
        //пробуємо знайти логін/пароль у базі  firebase
		firebase.auth().signInWithEmailAndPassword(user.email, user.password)
			.then((res) => {
				const userId = res.uid;
				firebase.database().ref(userId)
					.on('value', (data) => {
					})
						this.context.router.push('/dashboard');
			})
			.catch((err) => {
				this.setState({
					errorMessage: true
				})
			})
	}
	render() {
        const errorMessage = (
			<p style={{color:'red'}}>The password is invalid or the user does not have a password</p>
		)
        return (
            <div className='RegisterContainer'>
                 <img className="SalonImg" src="https://www.tpray.in.net/wp-content/uploads/2019/10/file.jpg" alt="img"/>
                
                {/*MDB елементи використовуються для красоти форми і їх респонсу на всіх пристроях */}
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
                                        onChange={this.handleChange}
                                    />
                                    <MDBInput
                                        label="Ваш пароль"
                                        group
                                        type="password"
                                        validate
                                        containerClass="mb-0"
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                                        Забули
                            <a href="#!" className="blue-text ml-1">
    
                                            Пароль?
                            </a>
                                    </p>
                                    <div className="text-center mb-3">
                                        <MDBBtn
                                            type="submit"
                                            gradient="blue"
                                            rounded
                                            className="btn-block z-depth-1a"
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
                            </a>
                                    </p>
                                </MDBModalFooter>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    </form>
                </MDBContainer>
            </div>
        );
	}
}
