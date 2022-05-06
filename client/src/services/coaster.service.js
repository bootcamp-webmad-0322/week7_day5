import axios from 'axios'

class CoastersService {

    constructor() {
        this.app = axios.create({ baseURL: 'http://localhost:5005/api/coasters' })
    }

    getAllCoasters = () => {
        return this.app.get('/getAllCoasters')
    }

    getOneCoaster = id => {
        return this.app.get(`/getOneCoaster/${id}`)
    }

    saveCoaster = coaster => {
        return this.app.post(`/saveCoaster`, coaster)
    }
}

const coastersService = new CoastersService()

export default coastersService