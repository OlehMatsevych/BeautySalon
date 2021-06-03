/* ФОРМА ДЛЯ РЕЄСТРАЦІЇ КОРИСТУВАЧА */



import React from 'react';
import './Registration.css';
import firebase from "firebase/app";
require('firebase/auth')

export default class createUser extends React.Component {
	createUser(e) {
		e.preventDefault();
		const user = {		//об'єкт з даними про юзера
			name: this.createName.value,
			email: this.createEmail.value,
			password: this.createPassword.value,
			confirm: this.confirmPassword.value
		}
		
		if(user.password.length<3 || user.password.length>25)
		{
			alert('Щось пішло не так')
			return;
		}

		if(user.password === user.confirm) {	//перевіряємо, чи сходяться пароль і його підтвердження
			firebase.auth().createUserWithEmailAndPassword(user.email, user.password)	//додаємо користувача в нашу firebase базу
				.then((data) => {
					console.log(data);
					var userId = data.uid;
					firebase.database().ref(userId).set({
						name:user.name,
						password: user.password,
						email: user.email
					}) 
            		alert('Успіх! Вітаємо')
				})
				.catch(function(error) {
					alert('Щось пішло не так1')
				var errorCode = error.code;
				var errorMessage = error.message;
            
			});
		}
	}
    handleChange = (e) => {		//метод, в якому ми можемо сетити дані про користувача з форми 
        this.setState({ [e.target.name]: e.target.value });
    }  
	render() {
        const errorMessage = (	//Помилка, при невдалій спробі реєстрації
			<p style={{color:'red'}}>Пароль не підходить</p>
		)
        return (
			<div className="mt-8">
				<form className="signIn__box" action=""  onSubmit={e => this.createUser.call(this, e)}>
					<h2 text-3xl mb-2 text-center font-bold>Створити користувача</h2>
					<input id="name" type='text' name='createName' placeholder="Ім'я" required ref={ref => this.createName = ref} /><br></br>
					<input id="email"type='email' placeholder='Електронна пошта' required ref={ref => this.createEmail = ref }/><br></br>
					<input id="psw"type='password' placeholder='Пароль' required ref={ref => this.createPassword = ref }/><br></br>
					<input id="repeat"type='password' placeholder='Підтвердіть пароль'required ref={ref => this.confirmPassword = ref }/><br></br>
					<input id="btn"className="button button--submit" href='/account' type='submit'/>
				</form>
			</div>
        )
	}
} 
