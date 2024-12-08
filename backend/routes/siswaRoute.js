import express from "express";

import {
    getSiswa,
    getSiswaById,
    createSiswa,
    updateSiswa
} from "../controllers/Siswa.js";
import { verifyUser,adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/siswa',getSiswa);
router.get('/siswa/:id',getSiswaById);
router.post('/siswa',createSiswa);
router.patch('/siswa/:id',updateSiswa);

export default router;
