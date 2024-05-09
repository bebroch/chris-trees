import axios from 'axios'
import { ResponseJsonDB } from '../types'
import { blankResponseJsonDB } from './data'

export class ApiService {
    static async get(): Promise<ResponseJsonDB> {
        let data: ResponseJsonDB
        try {
            data = (await axios.get<ResponseJsonDB>('https://camel-gaia.json.so/db')).data
        } catch (err) {
            data = blankResponseJsonDB
        }
        return data
    }
}
