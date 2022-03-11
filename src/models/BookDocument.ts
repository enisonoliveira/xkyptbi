import mongoose, { Schema } from "mongoose";

export const bookSchema = new Schema({
    name: String,
    description: String,
    autor: String,
    SBN: String,
    quantityInStock: Number
}, { collection: 'books' }
);


export default { BookSchema: bookSchema }
