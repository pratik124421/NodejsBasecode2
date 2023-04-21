import mongoose, { Model, Document } from 'mongoose';

export interface IUser {
  email: string;
  password:string;
  role:string;
}

export interface IUserDoc extends IUser, Document {
  isPasswordMatch:(password:string) => Promise<boolean>;
}

export interface IUserModel extends Model<IUserDoc> {
  isEmailTaken(email: string, excludeUserId?: mongoose.Types.ObjectId): Promise<boolean>;
}

// partial make all properties optional
// export type UpdateUserBody = Partial<IUser>;

export type NewRegisteredUser = Omit<IUser, 'role' | 'isEmailVerified'>;

// export type NewCreatedUser = Omit<IUser, 'isEmailVerified'>;

export interface IUserWithTokens {
  user: IUserDoc;
}
