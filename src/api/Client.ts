import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://ll.thespacedevs.com/2.1.0/'
});

export default axiosInstance;