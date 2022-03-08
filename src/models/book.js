mongoose.connect('mongodb://localhost:27017/web-app');
 
const bookSchema = new mongoose.Schema({
    name: String,
    description: String,
    autor: String,
    SBN: String,
    quantityInStock:Number,
}, { collection: 'books' }
);
 
module.exports = { Mongoose: mongoose, BookSchema: bookSchema }