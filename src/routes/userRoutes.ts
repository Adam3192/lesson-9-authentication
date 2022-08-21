import { Router } from 'express';
import { registerUserPage, registerUser, loginUserPage, loginUser, profilePage } from '../controllers/userController';
import authService from '../services/auth';

const router = Router();

// GET /user/register
router.get('/register', registerUserPage);

// POST /user/register
router.post('/register', registerUser);

// GET /user/login
router.get('/login', loginUserPage);

// POST /user/login
router.post('/login', authService.authenticate('local', {
 failureRedirect: '/user/login'
}), loginUser);

// GET /user/profile
router.get('/profile', profilePage);

export default router;