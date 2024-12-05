import express from "express";

import {
    getRoles,
    getRolesById,
    createRoles,
    updateRoles
} from "../controllers/Role.js";

const router = express.Router();

router.get('/role',getRoles);
router.get('/role/:id',getRolesById);
router.post('/role',createRoles);
router.patch('/role/:id',updateRoles);

export default router;
