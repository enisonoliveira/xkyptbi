"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var BookController = /** @class */ (function () {
    function BookController() {
        var _this = this;
        this.path = '/books';
        this.router = express.Router();
        this.book = [];
        this.getAllBooks = function (request, response) {
            response.send(_this.book);
        };
        this.createBook = function (request, response) {
            var book = request.body;
            _this.book.push(book);
            response.send(book);
        };
        this.updateBook = function (request, response) {
            var book = request.body;
            _this.book.push(book);
            response.send(book);
        };
        this.deleteBook = function (request, response) {
            var book = request.body;
            _this.book.push(book);
            response.send(book);
        };
        this.detailBook = function (request, response) {
            var book = request.body;
            _this.book.push(book);
            response.send(book);
        };
        this.intializeRoutes();
    }
    BookController.prototype.intializeRoutes = function () {
        this.router.get('/book/delete', this.getAllBooks);
        this.router.get('/books/listOne/', this.detailBook);
        this.router.post('/book/save', this.createBook);
        this.router.put('/book/save', this.updateBook);
        this.router.delete('/book/delete', this.deleteBook);
    };
    return BookController;
}());
exports.default = BookController;
