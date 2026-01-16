import axios from "axios";

//10000 millsec are 10 sec
const apiClient = axios.create({
    baseURL: 'http://localhost:8989/api'
    // baseURL:import.meta.env.VITE_APP_BASE_URL


});

export default apiClient;