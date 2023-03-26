import * as request from './requester';
const url = 'http://localhost:3030/data/comments';

export const getAll = async(storyId) => {
    const searchQuery = encodeURIComponent(`storyId="${storyId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);
    const result = await request.get(`${url}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);
   console.log(comments)
    return comments;
}
export const create = async (storyId, content) => {
    const result = await request.post(url, { storyId, content });
    console.log(result)
    return result;
}