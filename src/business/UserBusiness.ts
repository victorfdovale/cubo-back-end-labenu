import { UserDataBase } from "../data/UserDataBase";
import { User, UserDTO } from "../entities/Users";
import { IdGenerator } from "../services/IdGenerator";


export class UserBusiness {
    constructor(
        private userDataBase: UserDataBase,
        private idGenerator: IdGenerator
    ){}

    register = async (input: UserDTO) => {

        const {firstName, lastName, participation} = input

        if(!firstName || !lastName || !participation){
            throw new Error ("Um ou mais campos estão em branco")

        }
        const id = this.idGenerator.generateId()
        const user = new User(id, firstName, lastName, participation)

        await this.userDataBase.insert(user)
    }

    getAllUsers = async() => {
        try {
            const result = this.userDataBase.getAllUsers()
            return result 
        } catch (error) {
            throw new Error ("não foi possível retornar usuários")
        }
    }

}