import { Link } from "react-router-dom";



export const Story = ({
    _id,
     title,
    description,
    img,
    _ownerId
}) => {
 
    return (
        <li className="card">
            <img src={img} alt="travis" />
            <p>
                <strong>Автор </strong><span className="singer">{_ownerId}</span>
            </p>
            <p>
                <strong>Заглавие: </strong><span className="album">{title}</span>
            </p>
            <p><strong>Описание:</strong><span className="sales">{description.slice(0, description.indexOf('. '))}...</span></p>
            <Link to={`/catalog/${_id}`} className="details-btn" >Прочети...</Link>
        </li>
    )
}