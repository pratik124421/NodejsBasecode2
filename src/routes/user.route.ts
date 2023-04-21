import { Router } from 'express';
import { userController, userValidation } from '../modules/user';
import { validate } from '../modules/validate';

import { auth } from '../modules/auth';
import user_detail_router from "./user_detail.route"

const UserRouter: Router = Router();

UserRouter
.route('users/:userId')
.get(auth("getuser"),validate(userValidation.getUser), userController.getUser);


export default UserRouter;
