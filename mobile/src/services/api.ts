import axios from 'axios';

const api = axios.create({
    baseURL: "myIpAddress:3333"
});

export default api;