import express from "express";

import {
    getNilai_ekskul,
    getNilai_ekskulById,
    createNilai_ekskul,
    updateNilai_ekskul
} from "../controllers/NilaiEkskul.js";

const router = express.Router();

router.get('/nilai_ekskul',getNilai_ekskul);
router.get('/nilai_ekskul/:id',getNilai_ekskulById);
router.post('/nilai_ekskul',createNilai_ekskul);
router.patch('/nilai_ekskul/:id',updateNilai_ekskul);

export default router;
