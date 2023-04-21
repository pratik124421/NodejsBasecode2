import {Router} from "express"
import { auth } from "../modules/auth"
import { productController, productValidation } from "../modules/product"
import { validate } from "../modules/validate"

const ProductRouter = Router()

ProductRouter
.route("/")
.post(auth("addProduct"),validate(productValidation.createProduct),productController.createProdut)


export default ProductRouter