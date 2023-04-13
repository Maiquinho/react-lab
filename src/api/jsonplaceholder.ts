import axios from 'axios';


const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchApi = {
    getData: async (endpoint: string) => {
        const response = await axios.get(`${BASE_URL}/${endpoint}`);

        return response.data;
    },
    postData: async (endpoint: string, userId?: number, title?: string, body?: string) => {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, {
            body: JSON.stringify({
                userId, title, body
            })
        });

        return response.data;
    }
}