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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var bd_1 = __importDefault(require("../db/bd"));
var BookDocument_1 = __importDefault(require("../models/BookDocument"));
var loglevel_1 = __importDefault(require("loglevel"));
var BookService = /** @class */ (function () {
    function BookService() {
        var _this = this;
        this.path = '/books';
        this.router = express.Router();
        this.index = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, "Hola!"];
            });
        }); };
        this.getAllBooks = function (page) { return __awaiter(_this, void 0, void 0, function () {
            var Book, docs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loglevel_1.default.info("function list all books");
                        Book = bd_1.default.Mongoose.model('book', BookDocument_1.default.BookSchema, 'book');
                        return [4 /*yield*/, Book.find({}).skip(page * 10).limit(10).select('name').lean().exec()];
                    case 1:
                        docs = _a.sent();
                        return [2 /*return*/, docs];
                }
            });
        }); };
        this.createBook = function (body) { return __awaiter(_this, void 0, void 0, function () {
            var Book, docs, book, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loglevel_1.default.info("function  create book");
                        Book = bd_1.default.Mongoose.model('book', BookDocument_1.default.BookSchema, 'book');
                        return [4 /*yield*/, Book.find({ 'SBN': body.SBN }).lean().exec()];
                    case 1:
                        docs = _a.sent();
                        if (docs.length > 0) {
                            loglevel_1.default.error("Error because, SBN founded in your sytem, yeat!");
                            return [2 /*return*/, new Error("Error because, SBN founded in your sytem, yeat!")];
                        }
                        book = new Book({
                            name: body.name,
                            description: body.description,
                            author: body.author,
                            SBN: body.SBN,
                            quantityInStock: body.quantityInStock,
                        });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, book.save()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        loglevel_1.default.error(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, book];
                }
            });
        }); };
        this.updateBook = function (body, SBN) { return __awaiter(_this, void 0, void 0, function () {
            var Book, filter, docs, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loglevel_1.default.info("function updateBook book:" + SBN);
                        Book = bd_1.default.Mongoose.model('book', BookDocument_1.default.BookSchema, 'book');
                        filter = { 'SBN': SBN };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, Book.findOneAndUpdate(filter, body)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Book.find({ 'SBN': SBN }).lean().exec()];
                    case 3:
                        docs = _a.sent();
                        return [2 /*return*/, docs];
                    case 4:
                        err_2 = _a.sent();
                        loglevel_1.default.error(err_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.deleteBook = function (SBN) { return __awaiter(_this, void 0, void 0, function () {
            var Book, doc, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loglevel_1.default.info("function deleteBook book:" + SBN);
                        Book = bd_1.default.Mongoose.model('book', BookDocument_1.default.BookSchema, 'book');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Book.find({ 'SBN': SBN }).remove().exec()];
                    case 2:
                        doc = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        loglevel_1.default.error(err_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, "deleted!"];
                }
            });
        }); };
        this.detailBook = function (SBN) { return __awaiter(_this, void 0, void 0, function () {
            var Book, docs, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loglevel_1.default.info("function detailBook book:" + SBN);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        Book = bd_1.default.Mongoose.model('book', BookDocument_1.default.BookSchema, 'book');
                        return [4 /*yield*/, Book.find({ 'SBN': SBN }).lean().exec()];
                    case 2:
                        docs = _a.sent();
                        return [2 /*return*/, docs];
                    case 3:
                        err_4 = _a.sent();
                        loglevel_1.default.error(err_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
    }
    return BookService;
}());
exports.default = BookService;
