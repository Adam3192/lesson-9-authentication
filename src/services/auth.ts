import passport from "passport";
import { User } from "../models/user";

var LocalStrategy = require("passport-local");

passport.use(new LocalStrategy(async (username: string, password: any, done: any) => {
 let currentUser = await User.findOne({ where: { username: username } });
 
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

passport.serializeUser<any, any>((user, done: any) => {
 done(undefined, user);
});

passport.deserializeUser<any, any>((user, done) => {
 done(undefined, user);
});

export default passport;