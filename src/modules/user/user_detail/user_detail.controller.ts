import { catchAsync } from "../../utils";
import { Request, Response,NextFunction } from 'express';
import * as httpStatus from "http-status"

import * as UserDetailService from "./user_detail.service"
import { ApiError } from "../../errors";

export const AddUserDetail = catchAsync(
    async (req:Request,res:Response) => {
        const userDetail = await UserDetailService.AddUserDetail(req.body)
        console.log("userdata : ",userDetail)
        res.status(httpStatus.CREATED).send(userDetail);
    }
)


export const GetUserDetail = catchAsync(
    async (req:Request,res:Response) => {
        if (typeof req.params['userDetailId'] === 'string') {
            const userDetail = await UserDetailService.GetUserDetailById(req.params['userDetailId'])
            if (!userDetail) {
              throw new ApiError(httpStatus.NOT_FOUND, 'UserDetail not found');
            }
            res.send(userDetail);
          }
        else{
            throw new ApiError(httpStatus.BAD_REQUEST, 'Bad request');
        }
    }
)


export const GetUserDetails = catchAsync(
    async (req:Request,res:Response) => {   
        const userDetail = await UserDetailService.GetUserDetails(req.user._id)
        if (!userDetail) {
            throw new ApiError(httpStatus.NOT_FOUND, 'UserDetail not found');
        }
        res.send(userDetail);
    }
)

export const UpdateUserDetail = catchAsync(
    async (req:Request,res:Response) => {
        if (typeof req.params['userDetailId'] === 'string') {
            const userDetail = await UserDetailService.UpdateUserDetailById(req.params['userDetailId'],req.body)
            res.send(userDetail);
          }
        else{
            throw new ApiError(httpStatus.BAD_REQUEST, 'Bad request');
        }
    }
)

export const GetAllUserDetails = catchAsync(
    async (req:Request,res:Response) => {
        const allUsersDetail = await UserDetailService.FetchAllData()
        res.send(allUsersDetail);
    }
)