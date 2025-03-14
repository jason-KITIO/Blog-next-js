import express from 'express';
import { registerAuthor } from '../controllers/registerController';

const router = express.Router();

// register author
router.post('/', registerAuthor);

export default router;