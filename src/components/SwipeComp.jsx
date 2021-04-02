import  React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const Swipe = () => {
  return (
    <div >
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        Інфо
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5">
        Красота - внутрішня сторона істини
      </p>

      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.silkoilofmorocco.com.au%2Fwp-content%2Fgallery%2Fcosmetics-models%2FBeautiful-woman-portrait-beauty-on-dark-background-000077902775_Large.jpg&f=1&nofb=1"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Краса - це пристрасть</h4>
            <p className="grey-text">
            Справжня пристрасть привертає сильніше, ніж краса. 
          Просто тому, що пристрасть - це те, що ти свідомо проявляєш, а не просто користуєшся тим, що було дано від народження. Пристрасть, щирість і емоції.
            </p>
            <MDBBtn href='/account' color="indigo" size="sm">
              <MDBIcon far icon="clone" className="left" />Стати красивою
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
                          src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2014/04/fashion-photography-model-tips-1.jpg?w=600&h=1260&ssl=1"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Насолоджуйтесь красою з нової точки зору</h4>
            <p className="grey-text">
            Якщо в жінці горить якийсь внутрішній вогонь, то це помітно всім. І приваблює потужніше, ніж просто гарне зовнішнє оздоблення. 
            Вам же не потрібна гарна, але перегоріла лампочка, чи не так?
             Ось і з людьми так само. Якщо вони несуть світло - з ними завжди хтось захоче перебувати поруч.
            </p>
            <MDBBtn href='/account'  color="indigo" size="sm">
              <MDBIcon far href='/account' icon="clone" className="left" /> Стати красивою
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.izismile.com%2Fimg%2Fimg6%2F20130304%2F640%2Fnaturally_beautiful_girls_640_57.jpg&f=1&nofb=1"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Нотка екзотики</h4>
            <p className="grey-text">
            Постарайтеся оточити себе людьми, які будуть мотивувати на звершення, а не розвивати у вас комплекси. Це досить рідкісний дар — вміти підтримати, вдихнути віру, по-справжньому бажати добра
            </p>
            <MDBBtn href='/account'  color="indigo" size="sm">
              <MDBIcon far href='/account' icon="clone" className="left" /> Стати красивою
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
    </div>
  );
};

export default Swipe;
