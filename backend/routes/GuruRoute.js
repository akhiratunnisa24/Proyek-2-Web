import express from "express";

import {
    getGuru,
    getGuruById,
    createGuru,
    updateGuru
} from "../controllers/Guru.js";
import { verifyUser,adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/guru',verifyUser,adminOnly,getGuru);
router.get('/guru/:id',verifyUser,adminOnly,getGuruById);
router.post('/guru',verifyUser,adminOnly,createGuru);
router.patch('/guru/:id',verifyUser,adminOnly,updateGuru);

export default router;
