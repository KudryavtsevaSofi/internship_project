import { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE, TABLE_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    useEffect(() => {
      document.body.setAttribute('data-spy', 'scroll');
      document.body.setAttribute('data-target', '.navbar');
      document.body.setAttribute('data-offset', '50');
  
      return () => {
        document.body.removeAttribute('data-spy');
        document.body.removeAttribute('data-target');
        document.body.removeAttribute('data-offset');
      };
    }, []);
  
    return (
      <Navbar bg="dark" data-bs-theme="dark" sticky="top" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">InternSpaceShip</Navbar.Brand>
          <Navbar.Toggle aria-controls="myNavbar" />
          <Navbar.Collapse id="myNavbar">
            <Nav className="me-auto">
              <Nav.Link href="#section1">Юность</Nav.Link>
              <Nav.Link href="#section2">Карьера</Nav.Link>
              <Nav.Link href="#section3">Личная жизнь</Nav.Link>
              <Nav.Link href="#section4">Наследие</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <NavLink
                to={MAIN_ROUTE}
                style={{
                  color: 'whitesmoke',
                  textDecoration: 'none',
                  padding: '0 10px',
                  lineHeight: '40px', 
                }}
              >
                Главная
              </NavLink>
              <NavLink
                to={TABLE_ROUTE}
                style={{
                  color: 'whitesmoke',
                  textDecoration: 'none',
                  padding: '0 10px',
                  lineHeight: '40px',
                }}
              >
                Таблица
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  });
  
  export default NavBar;