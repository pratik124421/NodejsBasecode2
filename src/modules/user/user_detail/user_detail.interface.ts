import mongoose, { Model,Document } from "mongoose"

export interface IUserDetail{
    user:string
    firstname:string
    lastname:string
    phone:number
    contry:string
    state:string
    city:string
    pincode:string
    landmark:string
    address:string
}

export interface IUserDetailDoc extends IUserDetail,Document{}

export interface IUserDetailModel extends Model<IUserDetailDoc>{}

// export type IUserDetailCreateType = Omit<IUserDetail, 'lastname' | 'pincode' | 'address' >

export type IUserDetailUpdateType = Omit<IUserDetail, 'user'>
