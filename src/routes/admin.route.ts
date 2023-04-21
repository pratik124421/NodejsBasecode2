import { Router } from 'express';
import { validate } from '../modules/validate';

import { auth } from '../modules/auth';
import user_detail_router from "./user_detail.route"
import { userDetailController } from '../modules/user/user_detail';

const AdminRouter: Router = Router();

AdminRouter
.route('/userdetail')
.get(auth("getAllUserDetails"), userDetailController.GetAllUserDetails);


export default AdminRouter;
