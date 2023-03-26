import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
const baseUrl = 'http://localhost:3005/api/users';
export const UserAddress = () => {
    const { userId } = useParams();
    const [address, setAddress] = useState({})
    useEffect(() => {
        fetch(`${baseUrl}/${userId}`)
            .then(res => res.json())
            .then(data => {
                setAddress(data.user.address)
            })
    }, [userId])
    return (
        <>
<h5>Адрес</h5>
<p>Държава: {address.country}</p>
<p>Град: {address.city}</p>
<p>Улица: {address.street} Номер {address.streetNumber}</p>
</>
    )
}