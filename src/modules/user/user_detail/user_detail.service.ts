import mongoose from "mongoose"
import { IUserDetailDoc, IUserDetailUpdateType, IUserDetail } from "./user_detail.interface"
import UserDetailModel from "./user_detail.model"

export const AddUserDetail = async (UserDetailBody:IUserDetail) : Promise<IUserDetailDoc> => {
    return UserDetailModel.create(UserDetailBody)
}

export const GetUserDetailById = async (id:mongoose.Types.ObjectId) : Promise<IUserDetailDoc | null> => {
    return UserDetailModel.findById(id)
}

export const GetUserDetails = async (userid:mongoose.Types.ObjectId) : Promise<IUserDetailDoc[] | null> => {
    return UserDetailModel.find({user:userid})
}

export const UpdateUserDetailById = async (id:mongoose.Types.ObjectId,updateBody:IUserDetailUpdateType) : Promise<IUserDetailDoc | null> => {
    return UserDetailModel.findByIdAndUpdate(id,updateBody)
}

export const FetchAllData = async () : Promise<IUserDetailDoc[] | null> => {
    return UserDetailModel.find()
}