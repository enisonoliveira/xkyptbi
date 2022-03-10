import BookController from '../controller/BookController';
import {  gql }  from 'apollo-server';
import { BookInterface } from '../interfaces/BookInterface';
const book = new BookController ();
export const typeDefs =  gql`
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
        createBook(author:String,name:String,description:String,SBN:String,quantityInStock:Float): BookInterface
        updateBook( author:String,name:String,description:String,SBN:String,quantityInStock:Float ): BookInterface
        deleteBook( SBN :String): String
    }
  `;

export const resolvers = {
    Query: {
       books():any {
          return book.getAllBooks();
       },
       book(_:any, { SBN }:any) {
          return book.detailBook(SBN);
       },
    },
       Mutation: {
        createBook(_:any, { author,name,description,SBN,quantityInStock }:any) {
            let newBook: BookInterface ={ author:author,name:name,description:description,SBN:SBN,quantityInStock :quantityInStock};
           return book.createBook(newBook);
        },
        updateBook(_:any, { author,name,description,SBN,quantityInStock }:any)  {
         let updateBook: BookInterface ={ author:author,name:name,description:description,quantityInStock :quantityInStock};
         return book.updateBook(updateBook);
        },
        deleteBook(_:any, { SBN }:any) {
           return book.deleteBook(SBN);
        },
    },
 };