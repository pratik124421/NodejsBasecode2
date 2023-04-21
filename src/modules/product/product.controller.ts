import { catchAsync } from "../utils";
import {Request,Response} from "express"
import * as productService from './product.service';
import * as httpStatus from "http-status"

export const createProdut = catchAsync(async (req:Request,res:Response) => {

    req.body.listedby = req.user._id
    const product = await productService.createProduct(req.body);
    console.log("product : ",product)
    res.status(httpStatus.CREATED).send(product);
});
