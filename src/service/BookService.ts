import * as express from 'express';
import { BookInterface } from '../interfaces/BookInterface';
import mongoose from '../db/bd';
import document from '../models/BookDocument';
import logger from 'loglevel';

export default class BookService {

    public path = '/books';
    public router = express.Router();

    index = async () => {

        return "Hola!";
    }

    getAllBooks = async (page: number) => {

        logger.info("function list all books");
        const Book = mongoose.Mongoose.model('book', document.BookSchema, 'book');
        const docs = await Book.find({}).skip(page * 10).limit(10).select('name').lean().exec();

        return docs;
    }

    createBook = async (body: BookInterface) => {

        logger.info("function  create book");
        const Book = mongoose.Mongoose.model('book', document.BookSchema, 'book');
        const docs = await Book.find({ 'SBN': body.SBN }).lean().exec();

        if (docs.length > 0) {
            logger.error("Error because, SBN founded in your sytem, yeat!")
            return new Error("Error because, SBN founded in your sytem, yeat!");
        }

        const book = new Book({
            name: body.name,
            description: body.description,
            author: body.author,
            SBN: body.SBN,
            quantityInStock: body.quantityInStock,
        });

        try {
            await book.save();
        } catch (err) {
            logger.error(err);
        }

        return book;
    }

    updateBook = async (body: BookInterface, SBN: string) => {

        logger.info("function updateBook book:" + SBN);
        const Book = mongoose.Mongoose.model('book', document.BookSchema, 'book');
        const filter = { 'SBN': SBN };

        try {
            await Book.findOneAndUpdate(filter, body);
            const docs = await Book.find({ 'SBN': SBN }).lean().exec();
            return docs;
        } catch (err) {
            logger.error(err);
        }

    }

    deleteBook = async (SBN: string) => {

        logger.info("function deleteBook book:" + SBN);
        const Book = mongoose.Mongoose.model('book', document.BookSchema, 'book');

        try {
            const doc = await Book.find({ 'SBN': SBN }).remove().exec();
        } catch (err) {
            logger.error(err);
        }

        return "deleted!";
    }

    detailBook = async (SBN: any) => {

        logger.info("function detailBook book:" + SBN);

        try {
            const Book = mongoose.Mongoose.model('book', document.BookSchema, 'book');
            const docs = await Book.find({ 'SBN': SBN }).lean().exec();
            return docs
        } catch (err) {
            logger.error(err);
        }
    }
}

