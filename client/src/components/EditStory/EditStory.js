import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as storyService from '../../services/storyService';
import { useStoryContext } from "../../contexts/StoryContext";

export const EditStory = () => {
    const [currentStory, setCurrentStory] = useState({});
    const{storyEdit}= useStoryContext()
    const { storyId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        storyService.getOne(storyId)
            .then(storyData => {
                setCurrentStory(storyData);
            })
    }, [storyId])

    const onSubmit = (e) => {
        e.preventDefault();

        const storyData = Object.fromEntries(new FormData(e.target));

      storyService.edit(storyId, storyData)
            .then(result => {
                storyEdit(storyId, result);
              navigate(`/catalog/${storyId}`)
            });
    };


    return(
        <section id="edit">
        <div className="form">
          <h2>Редактирай твоя кратък разказ</h2>
          <form className="edit-form" method="post" onSubmit = {onSubmit}>
            
            <input type="text" name="title" id="album-album" placeholder="Заглавие" defaultValue={currentStory.title} />
            <input type="text" name="img" id="album-img" placeholder="Снимка https://..." defaultValue={currentStory.img} />
            <textarea name="description" cols="100" rows="40" placeholder="Твоя кратък разказ" defaultValue={currentStory.description} ></textarea>

            <button type="submit">Редактирай</button>
          </form>
        </div>
      </section>
    )
}
