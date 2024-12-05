import express from "express";

import {
    getPrestasi,
    getPrestasiById,
    createPrestasi,
    updatePrestasi
} from "../controllers/Prestasi.js";

const router = express.Router();

router.get('/prestasi',getPrestasi);
router.get('/prestasi/:id',getPrestasiById);
router.post('/prestasi',createPrestasi);
router.patch('/prestasi/:id',updatePrestasi);

export default router;
