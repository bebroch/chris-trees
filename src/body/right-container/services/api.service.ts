import axios from 'axios'
import { ResponseJsonDB } from '../types'

export class ApiService {
    static async get() {
        const response = await axios.get<ResponseJsonDB>('https://camel-gaia.json.so/db')
        return response.data
    }
}
