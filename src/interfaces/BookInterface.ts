import { Document } from 'mongoose';

export interface BookInterface extends Document {
  name: string;
  description: string;
  autor: string;
  SBN: string;
  quantityInStock:number;
  }