import { Router } from 'express';
import { registerUserPage, registerUser } from '../controllers/userController';

const router = Router();

// GET /user/register
router.get('/register', registerUserPage);

// POST /user/register
router.post('/register', registerUser);

export default router;