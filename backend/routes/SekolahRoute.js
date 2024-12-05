import express from "express";

import {
    getSekolah,
    getSekolahById,
    createSekolah,
    updateSekolah
} from "../controllers/Sekolah.js";

const router = express.Router();

router.get('/sekolah',getSekolah);
router.get('/sekolah/:id',getSekolahById);
router.post('/sekolah',createSekolah);
router.patch('/sekolah/:id',updateSekolah);

export default router;
