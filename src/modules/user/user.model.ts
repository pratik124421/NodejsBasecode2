import mongoose from 'mongoose';
import { IUserDoc, IUserModel } from './user.interfaces';

import {hash,compare} from "bcrypt"
import { UserType } from '../utils/enum';

import {Collections} from "../utils/enum"

const userSchema = new mongoose.Schema<IUserDoc, IUserModel>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type: String,
      // enum:UserType,
      default:UserType.User
    }
  },
  {
    timestamps: true,
  }
);

userSchema.method('isPasswordMatch', async function (password: string): Promise<boolean> {
  const user = this;
  return compare(password, user.password);
});


userSchema.static('isEmailTaken', async function (email: string, excludeUserId: mongoose.ObjectId): Promise<boolean> {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
});


userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await hash(user.password, 8);
  }
  next();
});

const User = mongoose.model<IUserDoc, IUserModel>(Collections.UserCollections, userSchema);

export default User;
