import * as express from 'express';
import { BookInterface } from '../interfaces/BookInterface';

class BookController{
    public path = '/books';
    public router = express.Router();

    private book: BookInterface[] = [
        {
            name: "",
            description: "",
            autor: "",
            SBN: "",
            quantityInStock:0,
        }
      ];

    constructor() {
        this.intializeRoutes();
      }

      public intializeRoutes() {
        this.router.get('/book/delete', this.getAllBooks);
        this.router.get('/books/listOne/', this.detailBook);
        this.router.post('/book/save', this.createBook);
        this.router.put('/book/save', this.updateBook);
        this.router.delete('/book/delete', this.deleteBook);
      }

      getAllBooks = (request: express.Request, response: express.Response) => {
        response.send(this.book);
      }
     
      createBook = (request: express.Request, response: express.Response) => {
        const book: BookInterface = request.body;
        this.book.push(book);
        response.send(book);
      }

      updateBook = (request: express.Request, response: express.Response) => {
        const book: BookInterface = request.body;
        this.book.push(book);
        response.send(book);
      }

      deleteBook = (request: express.Request, response: express.Response) => {
        const book: BookInterface = request.body;
        this.book.push(book);
        response.send(book);
      }

      detailBook = (request: express.Request, response: express.Response) => {
        const book: BookInterface = request.body;
        this.book.push(book);
        response.send(book);
      }
}

export default BookController;