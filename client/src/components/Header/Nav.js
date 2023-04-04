import { useContext } from 'react'
import { NavLink} from 'react-router-dom'
import logo from "./logo.jfif";
import Container from 'react-bootstrap/Container';
import {Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Figure from 'react-bootstrap/Figure';
import { Link, useLocation } from 'react-router-dom';



import { AuthContext } from '../../contexts/AuthContext'

export const MyNavbar = () => {
    const { isAuthenticated, email } = useContext(AuthContext)
    const location = useLocation();
    const activeStyle = {
        backgroundColor: 'rgb(242, 242, 242)',
        color: 'green',
        border: '1px solid green'
      };

    return (

        <Navbar bg="ligth" expand="xxl">

            <Container fluid>
                <NavLink to="/"> <Figure>
                    <Figure.Image
                        width={160}
                        height={80}
                        alt="logo"
                        src={logo}
                    />
                    <Figure.Caption style={{color:'green', fontStyle: 'italic'}}>
                        У нас и по света с деца
                    </Figure.Caption>
                </Figure>
                </NavLink>
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="pills" >
                    <Nav.Item>
                        <Nav.Link style={location.pathname === '/' ? activeStyle : {}} as={Link} to="/" active={location.pathname === '/'} >Начало <i className="fa-solid fa-person-hiking"></i></Nav.Link>
                        </Nav.Item>
                        <Nav.Link style={location.pathname === '/catalog' ? activeStyle : {}}  as={Link} to="/catalog" active={location.pathname === '/catalog'} >Разкази <i className="fa-solid fa-book-open-reader"></i></Nav.Link>
                        {isAuthenticated === true ?
                            <>
                               <Nav.Link style={location.pathname === '/create' ? activeStyle : {}}  as={Link} to="/create" active={location.pathname === '/create'} >Създай <i className="fa-solid fa-pen"></i></Nav.Link>
                                <Nav.Link style={location.pathname === '/logout' ? activeStyle : {}}  as={Link} to="/logout" active={location.pathname === '/logout'} >Излез <i className="fa-solid fa-right-from-bracket"></i></Nav.Link>
                                <Nav.Link style={location.pathname === '/todos' ? activeStyle : {}}  as={Link} to="/todos" active={location.pathname === '/todos'} >TODO <i className="fa-solid fa-list"></i></Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link style={location.pathname === '/login' ? activeStyle : {}}  as={Link} to="/login" active={location.pathname === '/login'}>Влез <i className="fa-solid fa-right-to-bracket"></i></Nav.Link>
                                <Nav.Link style={location.pathname === '/register' ? activeStyle : {}}  as={Link} to="/register" active={location.pathname === '/register'}>Регистрирай се <i className="fa-solid fa-address-book"></i></Nav.Link>
                            </>
                        }
                    </Nav>

                </Navbar.Collapse>

            </Container>
            {isAuthenticated === true && (<span style={{ color: 'green', fontSize: '16px' }}>Здравей, {email}</span>)}
        </Navbar>




    )
}