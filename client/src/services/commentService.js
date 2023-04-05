import * as request from './requester';


const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3030'
    : 'http://localhost:3030'; // TODO: Add server url when deployed
const url = `${baseUrl}/data/comments`;

export const getAll = async(storyId) => {
    const searchQuery = encodeURIComponent(`storyId="${storyId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);
    const result = await request.get(`${url}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);
 
    return comments;
}
export const create = async (storyId, content) => {
    const result = await request.post(url, { storyId, content });

    return result;
}