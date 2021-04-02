/*************************

Файл заголовку, в якому 'Викликаються' потрібні компоненти через задання маршруту


**************************/
import './Header.css';
import {
    Navbar,
    Nav,
  } from 'react-bootstrap';         //для красивого та гнучкого дизайну     

import React from 'react';

const Header = () => {
    return (
        <header >
            <Navbar className='App-header'  expand="lg" sticky="top" >
                <div>
                    <Nav.Link href='/' className="Navbar nav-logo"><b>Beauty Salon</b></Nav.Link>
                </div>
                <ul className="dropdown">
                    <div className="drop-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="dropdown-content show-dropdown" >
                        <Nav.Item ><Nav.Link className="NavbarLink" href='/'>Головна</Nav.Link></Nav.Item>
                        <Nav.Item ><Nav.Link className="NavbarLink" href='/account'>Записатися</Nav.Link></Nav.Item>

                        <Nav.Item className=" nav-right"><Nav.Link className="NavbarLink" href='/admin'>Адмін</Nav.Link></Nav.Item>
                        <Nav.Item className=" nav-right"><Nav.Link className="NavbarLink" href='/account'>Кабінет</Nav.Link></Nav.Item>
                    </div>
                </ul>
            </Navbar>
        </header>
    )
}

export default Header