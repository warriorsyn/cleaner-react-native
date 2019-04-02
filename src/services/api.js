import axios from 'axios';
import store from '../store';

const api = axios.create({
    baseURL: 'https://cleanner.herokuapp.com'
})

api.interceptors.request.use(async (config) => {
    const { token } = store.getState().auth;
    const headers = { ...config.headers } 
    if(token) {
        headers.Authorization = `Bearer ${token}`;     
    }

    return { ...config, headers };
})

export default api