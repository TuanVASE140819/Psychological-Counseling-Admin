import axios from "axios";



export const http = axios.create({
    baseURL: 'https://www.psychologicalcounselingv1.somee.com/api',
    timeout: 3000
})
    ;
http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        ['Authorization']: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjpbIjciLCJhZG1pbnBzeWMiLCJhZG1pbjEyNDUiXSwiZXhwIjoxNjYzODM3OTc0LCJpc3MiOiJUb2tlbkF1dGhieVRhIiwiYXVkIjoiVG9rZW5BdXRoYnlUYSJ9.RlIeX7Iwh4j1bqjS3wERaO1gpKVIkYFNEH_BaAg8pJQ'
    }

    return config;
}, (error) => {
    return Promise.reject(error);
})