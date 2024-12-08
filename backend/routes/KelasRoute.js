import express from "express";

import {
    getKelas,
    getKelasById,
    createKelas,
    updateKelas
} from "../controllers/Kelas.js";
import { verifyUser,adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/kelas',getKelas);
router.get('/kelas/:id',getKelasById);
router.post('/kelas',createKelas);
router.patch('/kelas/:id',updateKelas);

export default router;
