import ApiService from './api'
import AsyncStorage from '@react-native-async-storage/async-storage'

class ExercicioService extends ApiService {
    
    constructor() {
        super('/api/exercicio')
    }

    exercicioRealizado(credenciais) {
        return this.apiurl.post('/exercicio/salvar', credenciais)
    }

    getIndicesNecessarios(){
        const storagedUser = AsyncStorage.getItem('@RNAuth:user');
        return this.apiurl.get(`/exercicio/necessario/${storagedUser.id}`);
    }

    getSemanaDeExercicio(semana){
        return this.apiurl.get(`/exercicio/semana/${semana}`);
    }

    getSemanasConcluidas() {
        return this.apiurl.get('/exercicio/semanas-concluidas')
    }
}

export default ExercicioService;