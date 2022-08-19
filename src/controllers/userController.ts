import { RequestHandler } from "express";

export const registerUserPage: RequestHandler = (req, res, next) => {
    res.render('register');
}