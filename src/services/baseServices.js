import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://www.psychologicalcounselingv1.somee.com/api',
  timeout: 3000
})
http.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
      'Authorization':
        'Bearer ' + localStorage.getItem('LOGIN_ADMIN'),
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)
