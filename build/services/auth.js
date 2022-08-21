"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const user_1 = require("../models/user");
var LocalStrategy = require("passport-local");
passport_1.default.use(new LocalStrategy(async (username, password, done) => {
    let currentUser = await user_1.User.findOne({ where: { username: username } });
    if (!currentUser) {
        console.log("incorrect username");
        return done(undefined, false, { message: 'Incorrect Username' });
    }
    if (currentUser.password !== password) {
        console.log("incorrect password");
        return done(undefined, false, { message: 'Incorrect password' });
    }
    return done(undefined, currentUser);
}));
passport_1.default.serializeUser((user, done) => {
    done(undefined, user);
});
passport_1.default.deserializeUser((user, done) => {
    done(undefined, user);
});
exports.default = passport_1.default;
