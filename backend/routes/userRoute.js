import express from "express";

import {
    getUsers,
    getUsersById,
    createUsers,
    updateUsers
} from "../controllers/Users.js";

const router = express.Router();

router.get('/users',getUsers);
router.get('/users/:id',getUsersById);
router.post('/users',createUsers);
router.patch('/users/:id',updateUsers);

export default router;
