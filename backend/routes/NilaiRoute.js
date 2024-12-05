import express from "express";

import {
    getNilai,
    getNilaiById,
    createNilai,
    updateNilai
} from "../controllers/Nilai.js";

const router = express.Router();

router.get('/nilai',getNilai);
router.get('/nilai/:id',getNilaiById);
router.post('/nilai',createNilai);
router.patch('/nilai/:id',updateNilai);

export default router;
