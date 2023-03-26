import './StoryDetails.module.css'
import { useEffect, useContext, useReducer } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import * as storyService from '../../services/storyService';
import { useAuthContext } from "../../contexts/AuthContext";
import { StoriesContext } from "../../contexts/StoriesContext";
import * as commentService from '../../services/commentService';
import { storyReducer } from '../../reducers/storyReducer';

import { AddComment } from "./AddComment/AddComment";




export const StoryDetails = () => {
    const { userId, isAuthenticated, email } = useAuthContext()
    const { storyDelete } = useContext(StoriesContext)
    const { storyId } = useParams();
    const [story, dispatch] = useReducer(storyReducer, {})
    const navigate = useNavigate()

    useEffect(() => {
        Promise.all([
            storyService.getOne(storyId),
            commentService.getAll(storyId)
        ])
            .then(([storyData, comments]) => {
                const storyState = {
                    ...storyData,
                    comments
                }
                dispatch({ type: 'STORY_FETCH', payload: storyState })

            })
    }, [storyId]);

    const onCommentsSubmit = async (values) => {
        const res = await commentService.create(storyId, values.content)
        dispatch({
            type: 'COMMENT_ADD',
            payload: res,
            email: email
        })
       
    }

    const onDeleteClick = () => {

        storyService.delStory(storyId);

        storyDelete(storyId);

        navigate('/catalog');
    };

    return (
        <section id="details">

            <div className="details-wrapper">

                <h2 className="details-title">{story.title}</h2>
                <div className="img-wrapper">
                    <img src={story.img} alt="example1" />
                </div>
                <div className="info-wrapper">
                    <p><strong>E-mail: </strong><span id="details-singer">{story._ownerId}</span></p>

                    <p>{story.description}</p>

                </div>
                <div className="likes">Харесвания: <span className="likes-count">0</span></div>

                {/* <!--Edit and Delete are only for creator--> */}


                {story._ownerId === userId ?
                    <div className="action-buttons">
                        <Link to={`/catalog/${storyId}/edit`} className="edit-btn">Редактирай <i className="fa-solid fa-file-pen"></i></Link>
                        <button onClick={onDeleteClick}>Изтрий <i className="fa-solid fa-trash-can"></i></button>
                    </div>
                    :
                    <div id="action-buttons">
                        <Link to="/" className="like-btn" >Харесай <i className="fa-regular fa-thumbs-up"></i></Link>
                    </div>
                }
                <div className="comments">
                    <div className="details-comments">
                        <h6>Коментари:</h6>
                        <ul className="comments">
                            {story.comments && story.comments.map(x => (
                                <li key={x._id} className="comment"><i className="fa-regular fa-comment-dots"></i> {x.author.email} : {x.content} </li>
                            ))}

                        </ul>
                        {!story.comments?.length && (<p className="no-comment">Няма коментари.</p>)}

                    </div>

                    {isAuthenticated && <AddComment onCommentsSubmit={onCommentsSubmit} />}
                </div>
            </div>
        </section>
    )

}