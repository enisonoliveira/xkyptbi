import mongoose, { Document, Schema, model} from "mongoose";
import { BookInterface } from "../interfaces/BookInterface";


mongoose.connect('mongodb://localhost:27017/web', { useNewUrlParser: true,useFindAndModify:true });

export const bookSchema= new Schema({
    name: String,
    description: String,
    autor: String,
    SBN: String,
    quantityInStock:Number
}, { collection: 'books' }
);


export default  { Mongoose: mongoose, BookSchema: bookSchema }
