import '../../CarouselComp/CarouselComponent.css';
import React, { Component } from 'react';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel,MDBBtn, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

var ind = 4;

const Post = (props) => {
    console.log(props)
    let link = <div></div>
    console.log(props)
    if(props.source !== 0){
        link = <img
            className="d-block w-100"
            src={props.source}
            alt="Next slide"
          />
    }
    let caption = <div></div>
    if(props.header !== 0 || props.article !== 0 ){
        caption = <MDBCarouselCaption>
            <h3 className="h3-responsive">{props.header}</h3>
            <p>{props.article}</p>
            <MDBBtn style={{ padding: "9px" }} class="carouselBtn" color="primary" href='/account' >Записатися</MDBBtn>
        </MDBCarouselCaption>
    }
    return(
        <MDBCarouselItem itemId={ind++}>
        <MDBView>
        {link}   
        <MDBMask overlay="black-light" />
        
        </MDBView>
        {caption}
        
      </MDBCarouselItem>
    );
  };

  let src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
  let header='Hello'
  let article='Arcicle'
export default class AddPost extends React.Component{
    render(){
        return(
            <Post source={src} header={header} article={article} />)
    }
}
