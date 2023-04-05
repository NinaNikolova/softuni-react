import * as request from "./requester";

const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3030'
    : 'http://localhost:3030'; // TODO: Add server url when deployed
const url = `${baseUrl}/data/stories`;


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

export const delStory =  async(storyId) => await request.del(`${url}/${storyId}`);

export const edit =  async (storyId, data) => await request.put(`${url}/${storyId}`, data);

export const getEmail = async (_ownerId) =>await request.get(`${url}?where=_ownerId%3D%22${_ownerId}%22&load=author%3D_ownerId%3Ausers`)
