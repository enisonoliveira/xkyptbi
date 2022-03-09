import{bookSchema } from '../models/book';



// Display list of all books.
exports.book_list = function(req:Request, res:Response) { 
    res.send('NOT IMPLEMENTED: Book list');
};

// Display detail page for a specific book.
exports.book_detail = function(req:Request, res:Response) {
    const PARAM_ID: string = "id";
    if (typeof req.params[PARAM_ID] === "undefined" || req.params[PARAM_ID] === null) {
      res.sendStatus(404);
      next();
      return;
};

// Handle book create on POST.
exports.book_create_post = function(req:Request, res:Response) { 
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Handle book delete on POST.
exports.book_delete_post =function(req:Request, res:Response) { 
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Handle book update on PUT.
exports.book_update_post = function(req:Request, res:Response) { 
    res.send('NOT IMPLEMENTED: Book update POST');
};
