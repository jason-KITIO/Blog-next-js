import express from 'express';
import { LoginFunction } from '../controllers/authController';

const router = express.Router();

// login author
router.post('/', LoginFunction);

export default router;