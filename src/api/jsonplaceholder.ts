const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const fetchApi = {
    getData: async (endpoint: string) => {
        const response = await fetch(BASE_URL + endpoint);
        const json = await response.json();

        return json;
    },
    postData: async (endpoint: string, userId?: number, title?: string, body?: string) => {
        const response = await fetch(BASE_URL + endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                userId: userId,
                title: title,
                body: body
            })
        });
        const json = await response.json();

        return json;
    }
}