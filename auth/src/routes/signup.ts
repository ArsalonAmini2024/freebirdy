import express, { Request, Response } from 'express';
import { body, validateResult } from 'express-validator';
import jwt from 'jsonwebtoken';


const router = express.Router();

router.post (
    '/api/users/signup',

    //Save user to DB

    // Generate JWT 
    //const userJwt = jwt.sign({
    //    id: user.id,
   //     email: user.email
   // }, 'asdf');

    // Store on Sesssion object
    //req.session.jwt = userJwt; 

);

export { router as signupRouter };