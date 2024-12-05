import express from "express";

import {
    getMapel,
    getMapelById,
    createMapel,
    updateMapel
} from "../controllers/Mapel.js";

const router = express.Router();

router.get('/mapel',getMapel);
router.get('/mapel/:id',getMapelById);
router.post('/mapel',createMapel);
router.patch('/mapel/:id',updateMapel);

export default router;
