import { RequestHandler } from "express";
import { User } from '../models/user';

export const registerUserPage: RequestHandler = (req, res, next) => {
    res.render('register');
}

export const registerUser: RequestHandler = async (req, res, next) => {
    let newUser: User = req.body;
    let created = await User.create(newUser);
    console.log('User created', created);
    // res.redirect('/user/login');
    res.redirect('/coffee');
}