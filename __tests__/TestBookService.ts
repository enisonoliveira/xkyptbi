import BookService from "../src/service/BookService";
import { BookInterface } from '../src/interfaces/BookInterface';
const bookService = new BookService();

test('validar insert Book', async () => {
  jest.useFakeTimers();
  let newBook = { author: "Jão", name: "Coletanea do Jão", description: "As aventuras do jão", SBN: "1233", quantityInStock: 10.0 };
  expect(bookService.createBook(newBook)).toBeTruthy();
});

test('validar update Book', async () => {
  jest.useFakeTimers();
  let newBook = { author: "João", name: " do João", description: "As aventuras do joão", quantityInStock: 10.0 };
  expect(bookService.updateBook(newBook,'1233')).toBeTruthy();
});