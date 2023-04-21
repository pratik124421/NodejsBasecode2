
import mongoose from 'mongoose';
import { ApiError } from '../errors';
import * as httpStatus from "http-status"
import { IProductDoc, NewProductType } from './product.interface';
import ProductModel from './product.model';

export const createProduct = async (productBody: NewProductType): Promise<IProductDoc> => {
  return ProductModel.create(productBody);
};
