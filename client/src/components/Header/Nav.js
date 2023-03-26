import './Header.module.css'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo.jfif'

import { AuthContext } from '../../contexts/AuthContext'

export const Nav = () => {
    const { isAuthenticated, email } = useContext(AuthContext)
   
    return (

        <>
            <header>

                <NavLink style={({ isActive }) => ({ background: isActive && '#dddd95' })} to="/"> <div id="logo"><img src={logo} alt="logo" /><div className="text">У нас и по света с деца </div></div></NavLink>
                <nav>


                    <NavLink style={({ isActive }) => ({ background: isActive ? '#dddd95' : 'green' })} to="/">Начало <i className="fa-solid fa-person-hiking"></i></NavLink>
                    <NavLink style={({ isActive }) => ({ background: isActive ? '#dddd95' : 'green' })} to="/catalog">Разкази <i className="fa-solid fa-book-open-reader"></i></NavLink>

                    {isAuthenticated===true ? (
                        <>
                            <NavLink className="user" style={({ isActive }) => ({ background: isActive ? '#dddd95' : 'green' })} to="/create">Създай разказ <i className="fa-solid fa-pen"></i></NavLink>

                            <NavLink className="user" style={({ isActive }) => ({ background: isActive ? '#dddd95' : 'green' })} to="/todos">TODO <i className="fa-solid fa-list"></i></NavLink>
                            <NavLink className="user" style={({ isActive }) => ({ background: isActive ? '#dddd95' : 'green' })} to="/logout">Излез <i className="fa-solid fa-right-from-bracket"></i></NavLink>

                        </>
                    ) : (
                        <>
                            <NavLink className="guest" style={({ isActive }) => ({ background: isActive ? '#dddd95' : 'green' })} to="/login">Влез <i className="fa-solid fa-right-to-bracket"></i></NavLink>

                            <NavLink className="guest" style={({ isActive }) => ({ background: isActive ? '#dddd95' : 'green' })} to="/register">Регистрирай се <i className="fa-solid fa-address-book"></i></NavLink>
                            <NavLink className="guest" style={({ isActive }) => ({ background: isActive ? '#dddd95' : 'green' })} to="/users">Автори <i className="fa-solid fa-users"></i></NavLink>
                        </>
                    )}
                </nav>
                {isAuthenticated===true && (<span style={{color: 'green', fontSize: '20px'}}>Здравей, {email}</span>)}
            </header>

        </>
    )
}