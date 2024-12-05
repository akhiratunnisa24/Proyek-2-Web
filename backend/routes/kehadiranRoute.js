import express from "express";

import {
    getKehadiran,
    getKehadiranById,
    createKehadiran,
    updateKehadiran
} from "../controllers/Kehadiran.js";

const router = express.Router();

router.get('/kehadiran',getKehadiran);
router.get('/kehadiran/:id',getKehadiranById);
router.post('/kehadiran',createKehadiran);
router.patch('/kehadiran/:id',updateKehadiran);

export default router;
