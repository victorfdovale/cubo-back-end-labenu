import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO } from "../entities/Users";


export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ){}

    register = async (req: Request, res: Response): Promise<void> => {
        const {firstName, lastName, participation} = req.body
        const input : UserDTO = {
            firstName,
            lastName,
            participation
        }
        try {
            const result = await this.userBusiness.register(input)
            res.status(201).send({message: "Usuário adicionado com sucesso", result})
        } catch (error: any) {
            res.status(400).send({message: error.message})
            
        }
    }

    getAllUsers = async(req: Request, res: Response) => {
        try {
            const allUsers = await this.userBusiness.getAllUsers()
            res.status(200).send({allUsers})

        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    }

}