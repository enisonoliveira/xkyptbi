"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
var BookService_1 = __importDefault(require("../service/BookService"));
var apollo_server_1 = require("apollo-server");
exports.typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ninput BookInput {\n      author: String\n      name: String\n      description:String\n      SBN:String\n      quantityInStock:Float\n    }\n\n    type BookInterface {\n        _id:ID\n        author: String\n        name: String\n        description:String\n        SBN:String\n        quantityInStock:Float\n    }\n\n\n    type BookInterface2 {\n        name: String\n    }\n\n    type Query {\n      book(SBN:String): [BookInterface]\n      books(page:Int): [BookInterface2]\n    }\n    type Mutation {\n        createBook(book:BookInput): BookInterface\n        updateBook( book:BookInput ): [BookInterface]\n        deleteBook( SBN :String): String\n    }\n  "], ["\ninput BookInput {\n      author: String\n      name: String\n      description:String\n      SBN:String\n      quantityInStock:Float\n    }\n\n    type BookInterface {\n        _id:ID\n        author: String\n        name: String\n        description:String\n        SBN:String\n        quantityInStock:Float\n    }\n\n\n    type BookInterface2 {\n        name: String\n    }\n\n    type Query {\n      book(SBN:String): [BookInterface]\n      books(page:Int): [BookInterface2]\n    }\n    type Mutation {\n        createBook(book:BookInput): BookInterface\n        updateBook( book:BookInput ): [BookInterface]\n        deleteBook( SBN :String): String\n    }\n  "])));
exports.resolvers = {
    Query: {
        books: function (_, _a) {
            var page = _a.page;
            var book = new BookService_1.default();
            return book.getAllBooks(page);
        },
        book: function (_, _a) {
            var SBN = _a.SBN;
            var book = new BookService_1.default();
            console.log(SBN);
            return book.detailBook(SBN);
        },
    },
    Mutation: {
        createBook: function (_, bookObject) {
            var bookConvert = JSON.parse(JSON.stringify(bookObject));
            var book = bookConvert.book;
            var service = new BookService_1.default();
            var newBook = { author: book.author, name: book.name, description: book.description, SBN: book.SBN, quantityInStock: book.quantityInStock };
            return service.createBook(newBook);
        },
        updateBook: function (_, bookObject) {
            var bookConvert = JSON.parse(JSON.stringify(bookObject));
            var book = bookConvert.book;
            var service = new BookService_1.default();
            var updateBook = { author: book.author, name: book.name, description: book.description, quantityInStock: book.quantityInStock };
            return service.updateBook(updateBook, book.SBN);
        },
        deleteBook: function (_, _a) {
            var SBN = _a.SBN;
            var service = new BookService_1.default();
            return service.deleteBook(SBN);
        },
    },
};
var templateObject_1;
