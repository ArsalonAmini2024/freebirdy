import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true);

app.use(json());

// using cookies to serve the JWT
app.use(
    cookieSession({
        signed: false,
        secure: true
    })
)


const start = async () => {
    if(!process.env.JWT_KEY){
        throw new Error('JWT_KEY must be defined');
    }



}