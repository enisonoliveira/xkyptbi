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
var BookController_1 = __importDefault(require("../controller/BookController"));
var apollo_server_1 = require("apollo-server");
var book = new BookController_1.default();
exports.typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type BookInterface {\n      author: String\n      name: String\n      description:String\n      SBN:String\n      quantityInStock:Float\n    }\n    type Query {\n      book: BookInterface\n      books: [BookInterface]\n    }\n    type Mutation {\n        createBook(author:String,name:String,description:String,SBN:String,quantityInStock:Float): BookInterface\n        updateBook( author:String,name:String,description:String,SBN:String,quantityInStock:Float ): BookInterface\n        deleteBook( SBN :String): String\n    }\n  "], ["\n    type BookInterface {\n      author: String\n      name: String\n      description:String\n      SBN:String\n      quantityInStock:Float\n    }\n    type Query {\n      book: BookInterface\n      books: [BookInterface]\n    }\n    type Mutation {\n        createBook(author:String,name:String,description:String,SBN:String,quantityInStock:Float): BookInterface\n        updateBook( author:String,name:String,description:String,SBN:String,quantityInStock:Float ): BookInterface\n        deleteBook( SBN :String): String\n    }\n  "])));
exports.resolvers = {
    Query: {
        books: function () {
            return book.getAllBooks();
        },
        book: function (_, _a) {
            var SBN = _a.SBN;
            return book.detailBook(SBN);
        },
    },
    Mutation: {
        createBook: function (_, _a) {
            var author = _a.author, name = _a.name, description = _a.description, SBN = _a.SBN, quantityInStock = _a.quantityInStock;
            var newBook = { author: author, name: name, description: description, SBN: SBN, quantityInStock: quantityInStock };
            return book.createBook(newBook);
        },
        updateBook: function (_, _a) {
            var author = _a.author, name = _a.name, description = _a.description, SBN = _a.SBN, quantityInStock = _a.quantityInStock;
            var updateBook = { author: author, name: name, description: description, quantityInStock: quantityInStock };
            return book.updateBook(updateBook);
        },
        deleteBook: function (_, _a) {
            var SBN = _a.SBN;
            return book.deleteBook(SBN);
        },
    },
};
var templateObject_1;
