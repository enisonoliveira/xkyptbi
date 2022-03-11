"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost:27017/web', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
});
exports.default = { Mongoose: mongoose_1.default };
