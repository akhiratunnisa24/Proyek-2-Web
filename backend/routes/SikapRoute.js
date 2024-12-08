import express from "express";

import {
    getSikap,
    getSikapById,
    createSikap,
    updateSikap
} from "../controllers/Sikap.js";
import { verifyUser,adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/sikap',getSikap);
router.get('/sikap/:id',getSikapById);
router.post('/sikap',createSikap);
router.patch('/sikap/:id',updateSikap);

export default router;
