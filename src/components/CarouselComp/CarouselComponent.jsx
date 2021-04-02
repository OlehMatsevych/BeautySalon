/*************************

Файл в якому реалізовано карусель з головної сторінки

**************************/
import './CarouselComponent.css';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel, MDBBtn, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";
import React, { Component } from 'react'

import { db } from '../../firebase_config/config';
import data from '../../data/employes';

var id1 = 3;
class CarouselComp extends Component {
  //для кожного елементу масиву з контентом рендеримо елемент каруселі
  constructor(props) {

    super(props);
    this.state = {
      id: id1,
      url: '',
      header: '',
      post: '',
      list: [],
      dodList: []
    }
    this.state.list.push([
      1,
      "https://fashionhot.ru/wp-content/uploads/2017/06/Pricheski-dlya-devushek-5-7.jpg",
      "Стрижка",
      "Тепер Ви можете не переживати за результат! Володіючи багаторічним досвідом фахівці нашого салону створять ексклюзивний образ, який підкреслить Вашу красу."
    ])
    this.state.list.push([
        2,
        "https://img3.goodfon.ru/wallpaper/nbig/b/60/devushka-model-lico-vzglyad-3633.jpg",
        "Манікюр",
        "До послуг наших клієнтів безпечний манікюр і педикюр, різні види покриття, а також нарощування нігтів."
      ]
    )
    this.state.list.push(
      [
        3,
        "https://s1.1zoom.ru/big0/207/Model_Face_Makeup_Beautiful_583132_1280x924.jpg",
        "Макіяж",
        "Візажисти нашого салону знають, як виглядає ідеальний макіяж, а також підберуть Вам таку форму брів, яка додасть особі яскравість і виразність."
      ]
    )
  }
  componentDidMount() {
    let orderlist = [];
    db.collection('posts').get().then(
      (QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {

          let orderitem = [
            id1++,
            doc.data().url,
            doc.data().header,
            doc.data().post
          ];
          this.setState({
            dodList: [id1, doc.data().url, doc.data().header, doc.data().post]
          })
          orderlist.push(orderitem)
          this.state.list.push(
            [id1, doc.data().url, doc.data().header, doc.data().post]
          )
        })
      }
    )
  }
  render() {
    return (
      <MDBContainer id='carosuel' className='CarouselContainer' >
        <MDBCarousel
          activeItem={1}
          length={id1-1}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            {
              this.state.list.map((value) => {
                console.log(this.state.list)
                if(value[1]=='')
                {
                  return(
                    <div>Фото ще немає</div>
                  )
                }
                return (
                  <MDBCarouselItem itemId={value[0]}>
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={value[1]}
                        alt="First slide"
                      />
                      <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                      <h3 className="h3-responsive">{value[2]}</h3>
                      <p>{value[3]}</p>
                      <MDBBtn style={{ padding: "9px" }} class="carouselBtn" color="primary" href='/account' >Записатися</MDBBtn>
                    </MDBCarouselCaption>
                  </MDBCarouselItem>
                )
              })

            }
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    )

  }

}
export default CarouselComp