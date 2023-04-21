
import {Router} from "express"
import { auth } from "../modules/auth";
import { validate } from "../modules/validate";
import {userDetailValidation,userDetailController} from "../modules/user/user_detail"

// import  from "../modules/user/user_detail/user_detail.controller"

const UserDetailRouter : Router = Router();

UserDetailRouter
.route("/")
.post(auth("addUserDetail"),validate(userDetailValidation.AddUserDetailBodyValidation),userDetailController.AddUserDetail)
.get(auth("getUserDetails"),userDetailController.GetUserDetails)

UserDetailRouter
.route("/AllUserDetails")
.get(auth("getAllUserDetails"),userDetailController.GetAllUserDetails);

UserDetailRouter
.route("/:userDetailId")
.get(auth("getUserDetail"),validate(userDetailValidation.getUserDetailByIdValidation),userDetailController.GetUserDetail)
.patch(auth("updateUserDetail"),validate(userDetailValidation.updateUserDetailByIdValidation),userDetailController.UpdateUserDetail)


export default UserDetailRouter