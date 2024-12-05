import express from "express";

import {
    getJadwal,
    getJadwalById,
    createJadwal,
    updateJadwal
} from "../controllers/Jadwal.js";

const router = express.Router();

router.get('/jadwal',getJadwal);
router.get('/jadwal/:id',getJadwalById);
router.post('/jadwal',createJadwal);
router.patch('/jadwal/:id',updateJadwal);

export default router;
