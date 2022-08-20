import express, { NextFunction, Request, Response } from 'express'
import passport from 'passport';
import session from 'express-session';
import morgan from 'morgan';
import path from 'path';
import coffeeRoutes from './routes/coffeeRoutes';
import userRoutes from './routes/userRoutes';
import { defaultCoffee } from './controllers/coffeeController';
import { db } from './models';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../src/public')));

// Setting our view engine as Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../src/views"));
app.set('view options', {layout: 'layout'});

// Passport/Session middleware - authentication
app.use(session({ secret: 'I am a child of God' }));
app.use(passport.initialize());
app.use(passport.session());

// Routing Middleware
app.use('/coffee', coffeeRoutes);
app.use('/user', userRoutes);
app.use('/', defaultCoffee);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('error', {
        message: "This is not the URL you are looking for!"
    });
});

// Syncing our database
db.sync().then(() => {
    console.info("connected to the database!")
});

app.listen(3000);