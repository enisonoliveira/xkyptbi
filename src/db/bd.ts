import mongoose, { Document, Schema, model } from "mongoose";

mongoose.connect('mongodb://mongo:27017/web', {
    useNewUrlParser: true, 
    useFindAndModify: true,
    useUnifiedTopology: true
});

export default { Mongoose: mongoose }