import BookService from '../service/BookService';
import { gql } from 'apollo-server';
import { BookInterface } from '../interfaces/BookInterface';


export const typeDefs = gql`
input BookInput {
      author: String
      name: String
      description:String
      SBN:String
      quantityInStock:Float
    }

    type BookInterface {
        _id:ID
        author: String
        name: String
        description:String
        SBN:String
        quantityInStock:Float
    }


    type BookInterface2 {
        name: String
    }

    type Query {
      book(SBN:String): [BookInterface]
      books(page:Int): [BookInterface2]
    }
    type Mutation {
        createBook(book:BookInput): BookInterface
        updateBook( book:BookInput ): [BookInterface]
        deleteBook( SBN :String): String
    }
  `;

export const resolvers = {
    Query: {
        books(_: any, { page }: any): any {
            const book = new BookService();
            return book.getAllBooks(page);
        },
        book(_: any, { SBN }: any):any {
            const book = new BookService();
            return book.detailBook(SBN);
        },
    },
    Mutation: {
        createBook(_: any, bookObject: any) {
            const bookConvert = JSON.parse(JSON.stringify(bookObject));
            const book = bookConvert.book
            const service = new BookService();
            let newBook: BookInterface = { author: book.author, name: book.name, description: book.description, SBN: book.SBN, quantityInStock: book.quantityInStock };
            return service.createBook(newBook);
        },
        updateBook(_: any, bookObject: any) {
            const bookConvert = JSON.parse(JSON.stringify(bookObject));
            const book = bookConvert.book
            const service = new BookService();
            let updateBook: BookInterface = { author: book.author, name: book.name, description: book.description, quantityInStock: book.quantityInStock };
            return service.updateBook(updateBook, book.SBN);
        },
        deleteBook(_: any, { SBN }: any) {
            const service = new BookService();
            return service.deleteBook(SBN);
        },
    },
};
