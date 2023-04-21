import * as Joi from "joi"
import { IUserDetail, IUserDetailUpdateType } from "./user_detail.interface"

const AddUserDetailBody : Record<keyof IUserDetail,any> = {
    user:Joi.string().required(),
    firstname:Joi.string().required(),
    lastname:Joi.string(),
    phone:Joi.number().required(),
    contry:Joi.string().required(),
    state:Joi.string().required(),
    city:Joi.string().required(),
    pincode:Joi.string(),
    landmark:Joi.string(),
    address:Joi.string(),
}

export const AddUserDetailBodyValidation = {
    body : Joi.object().keys(AddUserDetailBody)
}

export const getUserDetailByIdValidation = {
    params:Joi.object().keys({
        userDetailId:Joi.string()
    })
}

const UpdateUserDetailBody : Record<keyof IUserDetailUpdateType,any> = {
    firstname:Joi.string().required(),
    lastname:Joi.string(),
    phone:Joi.number().required(),
    contry:Joi.string().required(),
    state:Joi.string().required(),
    city:Joi.string().required(),
    pincode:Joi.string(),
    landmark:Joi.string(),
    address:Joi.string(),
}

export const updateUserDetailByIdValidation = {
    params:Joi.object().keys({
        userDetailId:Joi.string().required()
    }),
    body:Joi.object().keys(UpdateUserDetailBody).min(1)
}
