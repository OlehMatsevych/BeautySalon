/*************************

Файл футеру

**************************/

import './Footer.css';
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";     //для красивого вигляду та гнучкості

const Footer = () => {
  return (
    <MDBFooter className="Info font-small pt-4 mt-4">  
    <MDBContainer  className="Info centered" fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Контакти</h5>
            <p>
            <p>Вулиця Т.Шевченка 25</p>
            <p>Робочі години:<br></br>Пн-Пт: 9:00-16:00 <br></br>Сб-Нд: Вихідний  </p>
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="www.instagram.com">Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="www.facebook.com">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="www.telegram.org">Telegram</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Люба Долбина
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;