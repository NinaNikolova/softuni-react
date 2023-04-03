import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./logo.jfif";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Figure from 'react-bootstrap/Figure';


import { AuthContext } from '../../contexts/AuthContext'

export const Header = () => {
    const { isAuthenticated, email } = useContext(AuthContext)

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
                    <Nav  variant="tabs" defaultActiveKey="/home" >
                        <Nav.Link  href="/">Начало <i className="fa-solid fa-person-hiking"></i></Nav.Link>
                        <Nav.Link href="/catalog">Разкази <i className="fa-solid fa-book-open-reader"></i></Nav.Link>
                        {isAuthenticated === true ?
                            <>
                               <Nav.Link href="/create">Създай <i className="fa-solid fa-pen"></i></Nav.Link>
                                <Nav.Link href="/logout">Излез <i className="fa-solid fa-right-from-bracket"></i></Nav.Link>
                                <Nav.Link href="/todos">TODO <i className="fa-solid fa-list"></i></Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link href="/login">Влез <i className="fa-solid fa-right-to-bracket"></i></Nav.Link>
                                <Nav.Link href="/register">Регистрирай се <i className="fa-solid fa-address-book"></i></Nav.Link>
                            </>
                        }
                    </Nav>

                </Navbar.Collapse>

            </Container>
            {isAuthenticated === true && (<span style={{ color: 'green', fontSize: '16px' }}>Здравей, {email}</span>)}
        </Navbar>




    )
}