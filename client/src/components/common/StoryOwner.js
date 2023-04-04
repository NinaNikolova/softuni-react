import { Navigate, Outlet, useParams } from "react-router-dom";
import { useStoryContext } from "../../contexts/StoryContext"
import { useAuthContext } from "../../contexts/AuthContext";

export const StoryOwner =()=>{
    const {storyId} =useParams()
    const {getStory} = useStoryContext();
    const {userId}=useAuthContext()
    const currentStory = getStory(storyId);
  
    if(currentStory&& currentStory._ownerId!==userId){
        return <Navigate to={`/catalog/${storyId}`}  replace />
    }
    return <Outlet />
}