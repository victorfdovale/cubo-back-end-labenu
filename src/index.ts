import app from './app'
import { UserBusiness } from './business/UserBusiness'
import { UserController } from './controller/UserController'
import { UserDataBase } from './data/UserDataBase'
import { IdGenerator } from './services/IdGenerator'

const userController = new UserController(
    new UserBusiness(
        new UserDataBase(),
        new IdGenerator()
    )
)

app.post('/user/register', userController.register)
app.get('/users', userController.getAllUsers)

