import { Router } from 'express';
import { registerUserPage } from '../controllers/userController';

const router = Router();

// GET /user/register
router.get('/register', registerUserPage);

export default router;