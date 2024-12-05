import express from "express";

import {
    getEkstrakurikuler,
    getEkstrakurikulerById,
    createEkstrakurikuler,
    updateEkstrakurikuler
} from "../controllers/Ekstrakurikuler.js";

const router = express.Router();

router.get('/ekstrakurikuler',getEkstrakurikuler);
router.get('/ekstrakurikuler/:id',getEkstrakurikulerById);
router.post('/ekstrakurikuler',createEkstrakurikuler);
router.patch('/ekstrakurikuler/:id',updateEkstrakurikuler);

export default router;
