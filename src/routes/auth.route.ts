import express, { Router } from 'express';
import { validate } from '../modules/validate';
import { authValidation, authController, auth } from '../modules/auth';

const router: Router = Router();

router.post('/register', validate(authValidation.register), authController.register);
router.post('/refresh', validate(authValidation.register), authController.register);

router.post('/login', validate(authValidation.login), authController.login);
router.post('/logout', validate(authValidation.logout), authController.logout);

export default router;