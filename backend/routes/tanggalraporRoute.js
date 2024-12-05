import express from "express";

import {
    getTanggal_rapor,
    getTanggal_raporById,
    createTanggal_rapor,
    updateTanggal_rapor
} from "../controllers/Tanggalrapor.js";

const router = express.Router();

router.get('/tanggal_rapor',getTanggal_rapor);
router.get('/tanggal_rapor/:id',getTanggal_raporById);
router.post('/tanggal_rapor',createTanggal_rapor);
router.patch('/tanggal_rapor/:id',updateTanggal_rapor);

export default router;
