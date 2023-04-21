import * as Joi from 'joi';
import { NewRegisteredUser } from './user.interfaces';

const createUserBody: Record<keyof NewRegisteredUser, any> = {
  email: Joi.string().required(),
  password: Joi.string().required()
};

export const createUser = {
  body: Joi.object().keys(createUserBody),
};

export const getUser = {
  params: Joi.object().keys({
    userId: Joi.string(),
  }),
};