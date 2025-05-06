import React, { useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE, TABLE_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite";

const NavBar = observer( () => {
    useEffect(() => {
        // Инициализация scrollspy
        document.body.setAttribute('data-spy', 'scroll');
        document.body.setAttribute('data-target', '.navbar');
        document.body.setAttribute('data-offset', '50');
    
        // Очистка при размонтировании компонента
        return () => {
          document.body.removeAttribute('data-spy');
          document.body.removeAttribute('data-target');
          document.body.removeAttribute('data-offset');
        };
      }, []);
    return (
        <Navbar className="navbar navbar-default" bg="dark" data-bs-theme="dark" sticky='top'>
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">InternSpaceShip</a>
                </div>
                <Container fluid>
                <Navbar.Toggle aria-controls="myNavbar" />
                <Navbar.Collapse id="myNavbar">
                    <Nav className="me-auto">
                    <Nav.Link href="#section1">Юность</Nav.Link>
                    <Nav.Link href="#section2">Карьера</Nav.Link>
                    <Nav.Link href="#section3">Личная жизнь</Nav.Link>
                    <Nav.Link href="#section4">Наследие</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                <div className="nav navbar-nav d-block">
                    <NavLink style={{ color: 'whitesmoke', textDecoration: 'none', margin: '5px'}} to={MAIN_ROUTE} >
                        Главная
                    </NavLink>
                    <NavLink style={{ color: 'whitesmoke', textDecoration: 'none', margin: '5px' }} to={TABLE_ROUTE}>
                        Таблица
                    </NavLink>
                </div>
            </div>
        </Navbar>
    );
  
});

export default NavBar