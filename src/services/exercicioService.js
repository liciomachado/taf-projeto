import ApiService from './api'

class ExercicioService extends ApiService {

    constructor() {
        super('/api/exercicio')
    }

    exercicioRealizado(credenciais) {
        //EXEMPLO PEGANDO TOKEN console.log("Chegou aqui", this.apiurl.defaults.headers['Authorization']);
        return this.post('/salvar', credenciais)
    }

    getListaItens() {
        return this.get('/buscartodos')
    }

}

export default ExercicioService;