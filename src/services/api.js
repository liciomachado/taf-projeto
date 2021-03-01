import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3030'
})

class ApiService {

    constructor() {
        this.api = api;
    }

    autenticar(usuario) {
        return this.api.post('/auth', usuario)
    }

}


export default ApiService;