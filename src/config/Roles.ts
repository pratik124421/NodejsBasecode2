import {UserType} from "../modules/utils/enum"

const allRoles = {
    [UserType.User]: [
      'addUserDetail',
      'updateUserDetail',
      'getUserDetails'
    ],
    [UserType.Admin]: [
        'getUsers', 
        'manageUsers',
        'getAllUserDetails',
        'addProduct',

        'addUserDetail',
        'updateUserDetail',
        'getUserDetails'
    ],
  };
  
export const roles: string[] = Object.keys(allRoles);
export const roleRights: Map<string, string[]> = new Map(Object.entries(allRoles));
  