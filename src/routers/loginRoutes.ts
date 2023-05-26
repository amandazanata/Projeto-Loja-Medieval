import { Router } from 'express';
import loginController from '../controllers/login.controller';
import loginValidations from '../middlewares/loginValidations';

const loginRouter = Router();

loginRouter.post('/login', loginValidations.usernameAndPasswordExists, loginController.login);

export default loginRouter;