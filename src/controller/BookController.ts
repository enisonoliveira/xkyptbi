import * as express from 'express';
import { BookInterface } from '../interfaces/BookInterface';
import mongoose from '../models/book'

class BookController {
    public path = '/books';
    public router = express.Router();

    private book: BookInterface[] = [];

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get('/books', this.getAllBooks);
        this.router.get('/books/listOne/', this.detailBook);
        this.router.post('/book/save', this.createBook);
        this.router.put('/book/save', this.updateBook);
        this.router.delete('/book/delete', this.deleteBook);
        this.router.get('/', this.index);
    }

    index = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const Book = mongoose.Mongoose.model('book', mongoose.BookSchema, 'book');
        const book = new Book({
            name: "insert book",
            description: "test book",
            autor: "test",
            SBN: "123",
            quantityInStock: 0
        });

        try {

            await book.save();
        } catch (err) {
            next(err);
        }
        response.send("book api");

    }

    getAllBooks = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const Book = mongoose.Mongoose.model('book', mongoose.BookSchema, 'book');
        const docs = await Book.find({}).lean().exec();
        response.send(docs);
    }

    createBook = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const Book = mongoose.Mongoose.model('book', mongoose.BookSchema, 'book');
        const book = new Book({
            name: request.body.name,
            description: request.body.description,
            author: request.body.author,
            SBN: request.body.SBN,
            quantityInStock: request.body.quantityInStock,
        });
        try {

            await book.save();
        } catch (err) {
            next(err);
        }
        response.send(book);
    }

    updateBook = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const Book = mongoose.Mongoose.model('book', mongoose.BookSchema, 'book');
        const book = new Book({
            name: request.body.name,
            description: request.body.description,
            author: request.body.author,
            quantityInStock: request.body.quantityInStock,
        });
        try {

            await book.update();
        } catch (err) {
            next(err);
        }
        response.send(book);
    }

    deleteBook = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const Book = mongoose.Mongoose.model('book', mongoose.BookSchema, 'book');
        try {
            const doc = await Book.find({'SBN':request.body.SBN}).remove().exec();
        } catch (err) {
            next(err);
        }
        response.send("deleted!");
    }

    detailBook = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const Book = mongoose.Mongoose.model('book', mongoose.BookSchema, 'book');
        const docs = await Book.find({'SBN':request.body.SBN}).lean().exec();
        response.send(docs);
    }
}

export default BookController;