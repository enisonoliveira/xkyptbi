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
        author: String
        name: String
        description:String
        SBN:String
        quantityInStock:Float
      }
  
    type Query {
      book: BookInterface
      books: [BookInterface]
    }
    type Mutation {
        createBook(book:BookInput): BookInterface
        updateBook( book:BookInput ): BookInterface
        deleteBook( SBN :String): String
    }
  `;

export const resolvers = {
    Query: {
        books(): any {
            const book = new BookService();
            return book.getAllBooks();
        },
        book(_: any, { SBN }: any) {
            const book = new BookService();
            return book.detailBook(SBN);
        },
    },
    Mutation: {
        createBook(_: any, bookObject:any) {
            const bookConvert=JSON.parse(JSON.stringify(bookObject));
            const  book=bookConvert.book
            const service = new BookService();
            let newBook: BookInterface = { author:book.author, name: book.name, description:book.description, SBN: book.SBN, quantityInStock:book.quantityInStock };
            return service.createBook(newBook);
        },
        updateBook(_: any, bookObject: any) {
            const bookConvert=JSON.parse(JSON.stringify(bookObject));
            const  book=bookConvert.book
            const service = new BookService();
            let updateBook: BookInterface =  { author:book.author, name: book.name, description:book.description, SBN: book.SBN, quantityInStock:book.quantityInStock };
            return service.updateBook(updateBook);
        },
        deleteBook(_: any, { SBN }: any) {
            const service = new BookService();
            return service.deleteBook(SBN);
        },
    },
};