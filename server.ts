import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import api from './src/routers/api';
import bodyParser from 'body-parser';

const server = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.MONGODB_URI}`);

server.use(bodyParser.json());
server.use(api);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});