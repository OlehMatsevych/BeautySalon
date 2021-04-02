
import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";

import { db } from '../../../firebase_config/config';

import CarouselComp from '../../CarouselComp/CarouselComponent';
class AddPost extends Component {
    constructor() {
		super();
		this.state = {
				url:'',
                header:'',
                post:'',
                data: []
		}
    }
    _handleChange = (e) => {        //обробник змін, який сетить наші state 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    _submit = () => {      //кнопка підтвердження
        this.setState({
            data: [
                this.state.url, this.state.header, this.state.post
            ]
        })

        db.collection('posts').add({
            url: this.state.url,
            header: this.state.header,
            post: this.state.post
        });
        
        alert('Успішно')
    }
    render() {
        return (
            <div>
                <MDBInput name='url' type="textarea" label="Введіть посилання на фото"  onChange={this._handleChange} value={this.state.url}  outline required />
                <MDBInput name='header' type="textarea" label="Введіть заголовок статті" onChange={this._handleChange} value={this.state.header}  outline required  />
                <MDBInput name='post' type="textarea" label="Введіть опис нової процедури" onChange={this._handleChange} value={this.state.post}   outline required  />
                <MDBBtn color="indigo" type="submit" onClick={this._submit}>Додати</MDBBtn>
                <CarouselComp/>
            </div>
        );
    }
}
export default AddPost