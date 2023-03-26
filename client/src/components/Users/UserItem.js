import{Link} from 'react-router-dom';
import {useContext} from 'react';
import { StoriesContext } from '../../contexts/StoriesContext';
export const UserItem = ({
    _id,
    name,
    email,
    imageUrl,
    storiesIds
}) => {
    const value =useContext(StoriesContext);
    return (
        <li><Link to={`/users/${_id}`}>{name} {imageUrl}</Link></li>
    )
}