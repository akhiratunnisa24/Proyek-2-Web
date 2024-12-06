import express from "express";

import {
    getRoles,
    getRolesById,
    createRoles,
    updateRoles
} from "../controllers/Role.js";

import { verifyUser,adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/role',verifyUser,adminOnly, getRoles);
router.get('/role/:id',verifyUser,adminOnly,  getRolesById);
router.post('/role',verifyUser,adminOnly,  createRoles);
router.patch('/role/:id',verifyUser,adminOnly,  updateRoles);

export default router;
