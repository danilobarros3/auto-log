import { getUserFromLocalStorage } from '@/utils/userStorage';
import axios, { AxiosInstance } from 'axios';


const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
    const user = getUserFromLocalStorage()
    const token = user?.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

export default api