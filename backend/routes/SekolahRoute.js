import express from "express";

import {
    getSekolah,
    getSekolahById,
    createSekolah,
    updateSekolah
} from "../controllers/Sekolah.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/sekolah',verifyUser,adminOnly,getSekolah);
router.get('/sekolah/:id',verifyUser,adminOnly,getSekolahById);
router.post('/sekolah',verifyUser,adminOnly,createSekolah);
router.patch('/sekolah/:id',verifyUser,adminOnly,updateSekolah);

export default router;
