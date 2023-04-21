import { string } from "joi"
import mongoose, { Collection } from "mongoose"
import { Collections } from "../../utils/enum"
import { IUserDetail, IUserDetailDoc, IUserDetailModel } from "./user_detail.interface"

const UserDetailSchema = new mongoose.Schema<IUserDetail,IUserDetailModel>(
    {
        user: {
            type:String,
            ref:"User",
            required: true
        },
        firstname: {
            type: String,
            required:true
        },
        lastname: {
            type: String,
        },
        phone:{
            type:Number,
            required:true
        },
        contry: {
            type: String,
            required:true
        },
        state: {
            type: String,
            required:true
        },
        city: {
            type: String,
            required:true
        },
        pincode: {
            type: String,
        },
        landmark:{
            type: String,
        },
        address:{
            type:String
        }
    },
    {
        timestamps: true,
    }
)


const UserDetailModel = mongoose.model<IUserDetailDoc,IUserDetailModel>(Collections.UserDetailsCollections,UserDetailSchema)


export default UserDetailModel;

