"use strict";
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
var BookService_1 = __importDefault(require("../src/service/BookService"));
var bookService = new BookService_1.default();
var multipleSBN = new Date().getTime().toString();
test('validate insert Book!', function () { return __awaiter(void 0, void 0, void 0, function () {
    var newBook;
    return __generator(this, function (_a) {
        newBook = { author: "Jão", name: "Coletanea do Pedro", description: "As aventuras do Pedro", SBN: multipleSBN, quantityInStock: 10.0 };
        expect(bookService.createBook(newBook)).toBeTruthy();
        return [2 /*return*/];
    });
}); });
test('equals!', function () { return __awaiter(void 0, void 0, void 0, function () {
    var newBook, resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newBook = { author: "Jão", name: "Coletanea do Jão", description: "As aventuras do jão", SBN: multipleSBN, quantityInStock: 10.0 };
                return [4 /*yield*/, bookService.createBook(newBook)];
            case 1:
                resp = _a.sent();
                expect(newBook.SBN).toBe(resp.SBN);
                return [2 /*return*/];
        }
    });
}); });
test('update Book!', function () { return __awaiter(void 0, void 0, void 0, function () {
    var SBN, updateBook, newBook, resp, respUpdate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                SBN = new Date().getTime().toString();
                updateBook = { author: "João", name: " do João", description: "As aventuras do joão", quantityInStock: 10.0 };
                newBook = { author: "Zé", name: "Coletanea do Zé", description: "As aventuras do Zé", SBN: SBN, quantityInStock: 10.0 };
                return [4 /*yield*/, bookService.createBook(newBook)];
            case 1:
                resp = _a.sent();
                return [4 /*yield*/, bookService.updateBook(updateBook, SBN)];
            case 2:
                respUpdate = _a.sent();
                expect(respUpdate[0].SBN).toBe(SBN);
                return [2 /*return*/];
        }
    });
}); });
test('detail Book!', function () { return __awaiter(void 0, void 0, void 0, function () {
    var SBN, newBook, resp, detail;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                SBN = new Date().getTime().toString();
                newBook = { author: "Zé", name: "Coletanea do Zé", description: "As aventuras do Zé", SBN: SBN, quantityInStock: 10.0 };
                return [4 /*yield*/, bookService.createBook(newBook)];
            case 1:
                resp = _a.sent();
                return [4 /*yield*/, bookService.detailBook(SBN)];
            case 2:
                detail = _a.sent();
                expect(detail[0].SBN).toBe(SBN);
                return [2 /*return*/];
        }
    });
}); });
test('deletar Book!', function () { return __awaiter(void 0, void 0, void 0, function () {
    var SBN, newBook, resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                SBN = new Date().getTime().toString();
                newBook = { author: "Zé", name: "Coletanea do Zé", description: "As aventuras do Zé", SBN: SBN, quantityInStock: 10.0 };
                return [4 /*yield*/, bookService.deleteBook(SBN)];
            case 1:
                resp = _a.sent();
                expect(resp).toBe("deleted!");
                return [2 /*return*/];
        }
    });
}); });
