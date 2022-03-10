import { Document } from 'mongoose';

export interface BookInterface  {
  name?: string;
  description?: string;
  author?: string;
  SBN?: string;
  quantityInStock?:number;
  }