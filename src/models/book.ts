import mongoose, { Document, Schema, model} from "mongoose";
import { BookInterface } from "../interfaces/BookInterface";

export const bookSchema:Schema = new Schema({
    name: String,
    description: String,
    autor: String,
    SBN: String,
    quantityInStock:Number,
}, { collection: 'books' }
);


export default mongoose.model<BookInterface>('BookSchema', bookSchema);
