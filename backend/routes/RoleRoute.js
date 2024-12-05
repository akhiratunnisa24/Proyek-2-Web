import express from "express";

import {
    getRoles,
    getRolesById,
    createRoles,
    updateRoles
} from "../controllers/Role.js";

import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/role',verifyUser,getRoles);
router.get('/role/:id',verifyUser, getRolesById);
router.post('/role',verifyUser, createRoles);
router.patch('/role/:id',verifyUser, updateRoles);

export default router;
