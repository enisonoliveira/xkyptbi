import BookService from "../src/service/BookService";

const bookService = new BookService();
const multipleSBN = new Date().getTime().toString();

test('validate insert Book!', async () => {

  let newBook = { author: "Jão", name: "Coletanea do Pedro", description: "As aventuras do Pedro", SBN: multipleSBN, quantityInStock: 10.0 };

  expect(bookService.createBook(newBook)).toBeTruthy();

});

test('equals!', async () => {

  let newBook = { author: "Jão", name: "Coletanea do Jão", description: "As aventuras do jão", SBN: multipleSBN, quantityInStock: 10.0 };

  const resp: any = await bookService.createBook(newBook)

  expect(newBook.SBN).toBe(resp.SBN);

});


test('update Book!', async () => {

  let SBN = new Date().getTime().toString();
  let updateBook = { author: "João", name: " do João", description: "As aventuras do joão", quantityInStock: 10.0 };
  let newBook = { author: "Zé", name: "Coletanea do Zé", description: "As aventuras do Zé", SBN: SBN, quantityInStock: 10.0 };

  const resp: any = await bookService.createBook(newBook)
  const respUpdate: any = await bookService.updateBook(updateBook, SBN)

  expect(respUpdate[0].SBN).toBe(SBN);

});

test('detail Book!', async () => {

  let SBN = new Date().getTime().toString();
  let newBook = { author: "Zé", name: "Coletanea do Zé", description: "As aventuras do Zé", SBN: SBN, quantityInStock: 10.0 };

  const resp: any = await bookService.createBook(newBook)
  const detail: any = await bookService.detailBook(SBN);

  expect(detail[0].SBN).toBe(SBN);

});

test('deletar Book!', async () => {

  let SBN = new Date().getTime().toString();
  let newBook = { author: "Zé", name: "Coletanea do Zé", description: "As aventuras do Zé", SBN: SBN, quantityInStock: 10.0 };

  const resp: any = await bookService.deleteBook(SBN)

  expect(resp).toBe("deleted!");

});