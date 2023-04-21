
import User from './user.model';
import { IUser, IUserDoc, NewRegisteredUser } from './user.interfaces';
import mongoose from 'mongoose';
import { ApiError } from '../errors';
import * as httpStatus from "http-status"

export const createUser = async (userBody: IUser): Promise<IUserDoc> => {
  return User.create(userBody);
};

export const getUserById = async (id: mongoose.Types.ObjectId): Promise<IUserDoc | null> => User.findById(id);

export const registerUser = async (userBody: NewRegisteredUser): Promise<IUserDoc> => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  return User.create(userBody);
};

export const getUserByEmail = async (email: string): Promise<IUserDoc | null> => User.findOne({ email });
