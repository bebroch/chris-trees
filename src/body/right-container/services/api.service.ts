import axios from 'axios'
import { API_URL, blankResponseJsonDB } from '../../../../data/data'
import { ResponseJsonDB } from '../types'

export class ApiService {
    static async get(): Promise<ResponseJsonDB> {
        let data: ResponseJsonDB
        try {
            data = (await axios.get<ResponseJsonDB>(API_URL)).data
        } catch (err) {
            data = blankResponseJsonDB
        }
        return data
    }
}
