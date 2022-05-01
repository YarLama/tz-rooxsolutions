import { IUser } from "../types/types";
import axios from 'axios'

export default class UserService {

    static async getAll() {
        try {
            const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return responce.data;
        } catch (e) {
            throw Error('UserService error in getAll()')
        }
    }  
    
    static async getUser(id : number) {
        try {
            const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users', {
                params: {
                    id: id
                }
            })
            return responce.data;
        } catch (e) {
            throw Error(`UserService error in getUser(${id})`)
        }
    }

    
}