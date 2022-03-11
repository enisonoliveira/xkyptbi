"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookSchema = void 0;
var mongoose_1 = require("mongoose");
exports.bookSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    autor: String,
    SBN: String,
    quantityInStock: Number
}, { collection: 'books' });
exports.default = { BookSchema: exports.bookSchema };
