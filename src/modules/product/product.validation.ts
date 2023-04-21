import { NewProductType } from "./product.interface";

import * as Joi from "joi"

export const createProduct:Record<keyof NewProductType , any> = {
    category :  Joi.string().required(),
    quantity:Joi.number(),
    title:Joi.string().required(),
    description:Joi.string().required(),
    details:Joi.array().items(
        Joi.object({
        size:Joi.string().required(),
        price:Joi.number().required(),
        image:Joi.array().items(Joi.string()),
        default:Joi.boolean()
        })
    ).min(2)
}

