export class User {
    constructor(
        private id: string,
        private firstName : string,
        private lastName : string,
        private participation: number
    ){}
}

export interface UserDTO {
    firstName: string,
    lastName: string,
    participation: number
}