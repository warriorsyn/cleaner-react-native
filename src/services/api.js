import axios from 'axios';
import store from '../store';
import AsyncStorage from '@react-native-community/async-storage';
const api = axios.create({
    baseURL: 'http://10.0.2.2:3333'
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