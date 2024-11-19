import axios from 'axios';

const api = axios.create({
    baseURL : 'http://localhost/7050',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})


export default api