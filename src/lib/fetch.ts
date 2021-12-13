import axios from 'axios';

export const SERVER_IP = 'http://127.0.0.1:7006';

export const getRequest = async <T>(url: string, query?: string) => {
    const result = await axios.get<T>(`${SERVER_IP}${url}?${query || ''}`);
    console.log(result);
    return result.data;
};

export const postRequest = async (url: string, body: any) => {
    return await axios.post(`${SERVER_IP}${url}`, body);
};

export const putRequest = async (url: string, body: any) => {
    const result = await axios.put(`${SERVER_IP}${url}`, body);
    console.log(result);
};
