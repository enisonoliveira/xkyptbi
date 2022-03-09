import BookController from './controller/BookController';
import App from './routes/app';
 
const app = new App(
  [
    new BookController(),
  ],
  5000,
);
 
app.listen();