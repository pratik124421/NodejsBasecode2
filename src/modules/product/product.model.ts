
import mongoose from "mongoose"
import { Collections } from "../utils/enum"
import { IProduct, IProductDoc, IProductModel } from "./product.interface"

const ProductSchema = new mongoose.Schema<IProduct,IProductModel>({
    listedby:{
        type:String,
        ref:Collections.UserCollections,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    },
    details:[
        {
            size:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            image:[{type:String}],
            default:{
                type:Boolean,
                default:false
            }
        }
    ] 
})

const ProductModel = mongoose.model<IProductDoc,IProductModel>(Collections.ProductCollections,ProductSchema)

export default ProductModel
