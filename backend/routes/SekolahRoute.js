import express from "express";

import {
    getSekolah,
    getSekolahById,
    createSekolah,
    updateSekolah
} from "../controllers/Sekolah.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/sekolah',verifyUser,getSekolah);
router.get('/sekolah/:id',verifyUser,getSekolahById);
router.post('/sekolah',verifyUser,createSekolah);
router.patch('/sekolah/:id',verifyUser,updateSekolah);

export default router;
