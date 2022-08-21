"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const auth_1 = __importDefault(require("../services/auth"));
const router = (0, express_1.Router)();
// GET /user/register
router.get('/register', userController_1.registerUserPage);
// POST /user/register
router.post('/register', userController_1.registerUser);
// GET /user/login
router.get('/login', userController_1.loginUserPage);
// POST /user/login
router.post('/login', auth_1.default.authenticate('local', {
    failureRedirect: '/user/login'
}), userController_1.loginUser);
// GET /user/profile
router.get('/profile', userController_1.profilePage);
exports.default = router;
