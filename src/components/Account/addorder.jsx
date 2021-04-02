/*************************************
 * 
 *  файл, в якому реалізовано компоненту додавання нового запису (нової процедури)
 * 
 *************************************/
import React, { Component } from 'react';
import Skylight from 'react-skylight';
import data from '../../data/users.js'

export default class AddOrder extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            time: '',
            employee: '', 
            procedure: ''              
        }
    }
      
    _handleChange = (e) => {        //обробка змін
        this.setState({
            [e.target.name] : [e.target.value],
        })
    }

    _submit = (e) => {      //кнопка підтвердження
        e.preventDefault();

        if(this.state.date[0]==null || this.state.time[0]==null || this.state.procedure==null || this.state.employee==null ){
            alert('Упс, заповніть будь ласка всі поля')
            return;
        }
        let newOrder = {
            date: this.state.date[0],
            time: this.state.time[0],
            procedures:  this.state.procedure,
            Master: this.state.employee
        }

        this.props._addOrder(newOrder);
        this.props._reload();

        data.push(newOrder)

        this.refs.order_dialog.hide();
    }

    render() {      //рендеримо таблицю з даними
        const _orderDialogue = {
            width: '70%',
            height: '70%',
            marginTop: '10%',
            marginleft: '10%',
        }

        return(
            <div>
                <Skylight dialogueStyles={_orderDialogue} hideOnOverlayClicked ref="order_dialog">
                <p>Введіть дату, коли вам буде зручно: </p>

                <input type='date' name='date' placeholder='YYYY-MM-DD' onChange={this._handleChange} value={this.state.date} />
                <input type="time"  name='time' placeholder='HH-mm' onChange={this._handleChange} value={this.state.time}  />
                <div>
                    <p>Виберіть процедуру:</p>
                    <select onChange={this._handleChange}  className="browser-default custom-select">
                        <option onChange={this._handleChange} name='procedure' value='макіяж'>Макіяж</option>
                        <option onChange={this._handleChange} name='procedure' value='зачіска'>Зачіска</option>
                        <option onChange={this._handleChange} name='procedure' value='соловіча стрижка'>Чоловіча стрижка</option>
                        <option onChange={this._handleChange} name='procedure' value='манікюр'>Манікюр</option>
                    </select>
                </div>
                <p>Виберiть свого майстра:</p>
                <div>
                    <select onChange={this._handleChange}  className="browser-default custom-select">
                        <option onChange={this._handleChange} name='employee' value='Надія'>Надія</option>
                        <option onChange={this._handleChange} name='employee' value='Марія'>Марія</option>
                        <option onChange={this._handleChange} name='employee' value='Оксана'>Оксана</option>
                    </select>

                </div>

                <br />
                <button onClick={this._submit}>Готово</button>
                </Skylight>

                <button className='btn btn-outline-info' onClick={()=> this.refs.order_dialog.show()}> Записатися на процедури </button>
                <a href='https://calendar.google.com' target='_blank' rel='noopener noreferrer'><button className='btn btn-outline-info'>Google Calendar</button></a>
            </div>
        )
    }
}