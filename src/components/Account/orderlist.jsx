/***********************
 * Файл в якому реалізовано компоненту, що відображає список наших записів на процедури
 * 
 * 
 * 
 **********************/


import React, { Component } from 'react';

import { db } from '../../firebase_config/config';
import Addorder from './addorder';

    /*
        отримує дані списку замовлень для користувача
    */

export default class Orderlist extends Component{
    state = {
        orderlist: [],
    };

    componentDidMount() {       //примусова функція
        this._loadOrderlist();
    }

    _googleCalendar = (date, userId, description) => {
        if(this.props._google === false){
            let dateObject = new Date(date);

            let startDate = dateObject.getFullYear()
                            + ((dateObject.getMonth() + 1 > 9) ? dateObject.getMonth() + 1 : '0' + (dateObject.getMonth() + 1) )
                            + ((dateObject.getDate() > 9) ? dateObject.getDate() : '0' + dateObject.getDate() );
            let endDate = dateObject.getFullYear()
                            + ((dateObject.getMonth() + 1 > 9) ? dateObject.getMonth() + 1 : '0' + (dateObject.getMonth() + 1) )
                            + ((dateObject.getDate() + 1 > 9) ? dateObject.getDate() + 1 : '0' + (dateObject.getDate() + 1) );

            let googleCalendarUrl = 'https://calendar.google.com/calendar/r/eventedit?dates='
            + startDate + '/' + endDate + '&text=' + userId + '&details=' + description;

            return(
                <a href={googleCalendarUrl} target='_blank'><button className='btn btn-outline-info btn-sm'> додати до G</button></a>
            )

            /*
            тимчасове рішення для виклику календаря Google додавання події для доступу до календаря google клієнта
            */
        }
    }

    _loadOrderlist = () => {
        /*
            отримати замовлення для користувача та зберегти на безпечному рівні
        */
       let orderlist = [];
        db.collection('orders').get().then(
            (QuerySnapshot) => {
                QuerySnapshot.forEach((doc) => {
                    let orderitem = {
                        id: doc.id,
                        date: doc.data().date,
                        time: doc.data().time,
                        employee: doc.data().employee, 
                        procedure: doc.data().procedure
                    };
                    orderlist.push(orderitem);
                })
            }
        ).then((e)=> {

            console.log(orderlist)
            this.setState({
                orderlist: orderlist,
            });
        }
        );
        /* примусова функція чекати, поки весь масив буде завантажений */
    }

    _addOrder = (newOrder) => {
        console.log(newOrder)
        db.collection('orders').add({
            customerid: this.props._user,
            date: newOrder.date,
            time: newOrder.time,
            employee: newOrder.Master, 
            procedure: newOrder.procedures
        });
        
        /*
        прийняти об'єкт замовлення та натиснути на ідентифікатор клієнта бази даних firestore, отриманий з реквізиту
        */
    }

    _deleteOrder = (docId, index) => {
        db.collection('orders').doc(docId).delete();
        /*
            прийняти ідентифікатор документа як вхідний, а потім видалити відповідний документ
             з бази даних firestore
        */
        alert('Запис видалено, можете спробувати додати ще #' + index + '!');
        this._loadOrderlist();
        /*
            попередження клієнта та оновлення списку
        */
    }

    render(){
        console.log(this.state.orderlist)
        const orderlist = this.state.orderlist.map((order, index) =>
        <tr key={index}>
            <th scope='row'>{index + 1}</th>
            <td>
                <a>{order.date}  </a>
                {this._googleCalendar(order.date, this.props._user, 'Дата')}
            </td>
            <td>
                <a>{order.time}</a>
                {this._googleCalendar(order.time, this.props._user, 'Час')}
            </td>
            <td>
                <a>{order.procedure}</a>
                {this._googleCalendar(order.procedure, this.props._user, 'Процедура')}
            </td>
            <td>
                <a>{order.employee}</a>
                {this._googleCalendar(order.employee, this.props._user, 'Майстер')}
            </td>
            <td><button className='btn btn-outline-danger btn-block' onClick={() => this._deleteOrder(order.id, index+1)}>Видалити запис</button></td>
        </tr>
        );

        if(this.props._user == null){
            return(
            <div>
                <p>
                Ласкаво просимо! Будь-ласка створіть обліковий запис для того, щоб записатися на процедури! <br></br> З повагою наша компанія
                </p>
           </div>
        )
    }else if(orderlist === ''){
        return(
            <div>
                <p>Logged in as: {this.props._user}</p>
                <Addorder _addOrder={this._addOrder} _reload={this._loadOrderlist} />
                <p>Ваші записи</p>
            </div>
        )
    }
    else{
        console.log(this.state.orderlist)
     return(
        <div className='App'>
            <p>Ви увійшли як: {this.props._user}</p>
            <Addorder _addOrder={this._addOrder} _reload={this._loadOrderlist} />
            <table className='table table-hover'>
                <thead className='thead-light'>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Дата</th>
                        <th scope='col'>Час</th>
                        <th scope='col'>Процедура</th>
                        <th scope='col'>Майстер</th>
                    </tr>
                </thead>
                <tbody>
                    {orderlist}
                </tbody>
            </table>
        </div>
    )}
    }
}