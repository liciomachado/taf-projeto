import ApiService from './api'

class UsuarioService extends ApiService {

    constructor() {
        super('/usuario')
    }

    authUser(credenciais) {
        return this.apiurl.post('usuario/auth', credenciais)
        //console.log("Chegou aqui", this.apiurl.defaults.headers['Authorization'], credenciais);
    }

    NewUser(credenciais) {
        return this.apiurl.post('usuario/save', credenciais)
    }
}

export default UsuarioService;