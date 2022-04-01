import { User } from "../entities/Users";
import BaseDatabase from "./BaseDataBase";


export class UserDataBase extends BaseDatabase{
    insert = async(user: User) => {
        try {
            await BaseDatabase.connection('usuario_cubo').insert(user)
        } catch (error: any) {
            throw new Error (error.sqlMessage)
        }
    }

    getAllUsers = async()  => {
        try {
            const result: User[] = await BaseDatabase.connection.raw(`
                SELECT * FROM usuario_cubo;
            `)
            return result[0]
        } catch (error: any) {
            throw new Error (error.sqlMessage)   
        }
    }

}