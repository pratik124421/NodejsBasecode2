import {Document,Model} from "mongoose"

export interface IProductDetails{
    size:string
    price:number
    image:string[]
    default:boolean
}

export interface IProduct{
    category:string
    quantity:number
    title:string
    description:string
    details:IProductDetails[]
    listedby:string
} 

export type NewProductType = Omit<IProduct, 'listedby'>

export interface IProductDoc extends IProduct,Document{}

export interface IProductModel extends Model<IProductDoc>{}
