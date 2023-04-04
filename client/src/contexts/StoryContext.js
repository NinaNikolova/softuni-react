import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as storyService from '../services/storyService';
export const StoryContext = createContext();



export const StoryProvider = ({
    children
}) => {

    const [stories, setStories] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        storyService.getAll().then((data) => {
            Promise.all(
                data.map((x) =>
                    storyService.getEmail(x._ownerId).then((res) => ({ ...x, email: res[0].author.email }))
                )
            ).then((stories) => {
                setStories(stories);
            });
        });
    }, []);
    const onCreateStorySubmit = async (data) => {
        const newStory = await storyService.create(data);
        // TODO: add to state
        setStories(state => ([...state, newStory]))
        // TODO: redirect to catalog
        navigate('/catalog')
    }

    const storyAdd = (storyData) => {
        setStories(state => [
            ...state,
            storyData,
        ]);

        navigate('/catalog');
    };

    const storyEdit = (storyId, storyData) => {
        setStories(state => state.map(x => x._id === storyId ? storyData : x));

    }
    const storyDelete = (storyId) => {
        setStories(state => state.filter(x => x._id !== storyId));
        navigate('/catalog');
    }
    const getStory = (storyId) => {
        return stories.find(story => story._id === storyId)
    }
    const contextValues = {
        stories,
        onCreateStorySubmit,
        storyEdit,
        storyAdd,
        storyDelete,
        getStory
    }
    return (
        <StoryContext.Provider value={contextValues}>
            {children}
        </StoryContext.Provider>
    )
}

export const useStoryContext = () => {
    const context = useContext(StoryContext);
    return context;
}