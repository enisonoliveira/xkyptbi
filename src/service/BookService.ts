import * as express from 'express';
import { BookInterface } from '../interfaces/BookInterface';
import mongoose from '../models/BookDocument'

export default class BookService {

    public path = '/books';
    public router = express.Router();

    index = async () => {
        const Book = mongoose.Mongoose.model('book', mongoose.BookSchema, 'book');
        const book = new Book({
            name: "insert book",
            description: "test book",
            autor: "test",
            SBN: "123",
            quantityInStock: 10
        });

        try {
            await book.save();
        } catch (err) {
        }finally{
        }
        return book;

    }

     getAllBooks= async  () => {
        const Book = mongoose.Mongoose.model('book', mongoose.BookSchema, 'book');
        const docs = await Book.find({}).lean().exec();
        return docs;
    }

    createBook = async (body:BookInterface) => {
        const Book = mongoose.Mongoose.model('book', mongoose.BookSchema, 'book');
        console.log(body)
        const book = new Book({
            name: body.name,
            description:body.description,
            author: body.author,
            SBN: body.SBN,
            quantityInStock: body.quantityInStock,
        });
        try {

            await book.save();
        } catch (err) {
        }
        return book;
    }

    updateBook = async (body:BookInterface,SBN:string) => {
        const Book = mongoose.Mongoose.model('book', mongoose.BookSchema, 'book');
        const filter = { 'SBN': SBN };
        try {
            await Book.findOneAndUpdate(filter,body);
            const docs = await Book.find({'SBN':SBN}).lean().exec();

            return docs;
        } catch (err) {
        }
    }

    deleteBook = async (SBN:string) => {
        const Book = mongoose.Mongoose.model('book', mongoose.BookSchema, 'book');
        try {
            const doc = await Book.find({'SBN':SBN}).remove().exec();
        } catch (err) {
        }
       return "deleted!";
    }

       detailBook =async (SBN:any) => {
           try{
                const Book = mongoose.Mongoose.model('book', mongoose.BookSchema, 'book');
                const docs = await Book.find({'SBN':SBN}).lean().exec();
                return docs
            } catch (err) {
            }
    }
}

