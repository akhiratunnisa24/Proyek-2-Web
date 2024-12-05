import express from 'express';
import {
    Login,
    Logout, 
    Me 
} from "../controllers/Auth.js";

const router = express.Router();

router.get('/me', Me);
router.post('/login', Login);
router.post('/logout', Logout); 

export default router;
