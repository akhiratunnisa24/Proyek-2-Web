import express from "express";

import {
    getGuru,
    getGuruById,
    createGuru,
    updateGuru
} from "../controllers/Guru.js";

const router = express.Router();

router.get('/guru',getGuru);
router.get('/guru/:id',getGuruById);
router.post('/guru',createGuru);
router.patch('/guru/:id',updateGuru);

export default router;
