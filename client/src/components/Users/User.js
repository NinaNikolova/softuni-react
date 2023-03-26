import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Link, Routes, Route } from 'react-router-dom';

import { UserAddress } from './UserAddress';
const baseUrl = 'http://localhost:3030/jsonstore/users';

export const User = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`${baseUrl}/${userId}`)
            .then(res => res.json())
            .then(data => {
                setUser(data.user)
            })
    }, [userId])
    const onBackButtonClick =()=>{
        navigate('/users')
    }
    return (
        <>
            <h2>Профил на {user.name}</h2>
            <img src={user.imageUrl} alt="imageUser" />
            <p>E-mail: {user.email}</p>
            <button onClick={onBackButtonClick}>Обратно към автори</button>
            <nav>
                <Link to="address">Адрес</Link>
                <Link to="createdAt">Дата на създаване</Link>
                <Link to="updatedAt">Дата на промяна</Link>
            </nav>
            <Routes>
                <Route path="/address" element={<UserAddress />}></Route>
                <Route path="/createdAt" element={<h5>createdAt</h5>}></Route>
                <Route path="/updatedAt" element={<h5>updatedAt</h5>}></Route>
            </Routes>
        </>
    )
}