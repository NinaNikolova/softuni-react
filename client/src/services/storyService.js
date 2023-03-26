import * as request from "./requester"
const url = 'http://localhost:3030/data/stories';

export const getAll = async () => {
    const data = await request.get(url);
   return Object.values(data);
}

export const create = async (storyData) => {
    const data = await request.post(url, storyData);
    return data;
}
export const getOne = async (storyId) => {
    const result = await request.get(`${url}/${storyId}`);
    return result;
}

export const delStory = (storyId) => request.del(`${url}/${storyId}`);

export const edit =  async (storyId, data) => await request.put(`${url}/${storyId}`, data);
