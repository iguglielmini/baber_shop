import axios from 'axios';
import CONFIG from '../config';

interface HTTPMethods {
    get: Function
    put: Function
    post: Function
    patch: Function
    delete: Function
}

class Api {
    axios: HTTPMethods

    constructor() {
        const token = sessionStorage.getItem('ACCESS_TOKEN');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        this.axios = axios.create({
            ...config,
            timeout: 5000,
            baseURL: CONFIG.APIBASE,
        });
    }

    get(url: string, config?: object) {
        return this.axios.get(url, { ...config });
    }

    post(url: string, data: object, config?: object) {
        return this.axios.post(url, { ...data }, { ...config });
    }

    patch(url: string, data: object, config?: object) {
        return this.axios.put(url, { ...data }, { ...config });
    }

    put(url: string, data: object, config?: object) {
        return this.axios.patch(url, { ...data }, { ...config });
    }

    delete(url: string, config?: object) {
        return this.axios.delete(url, { ...config });
    }
}

export default Api;
