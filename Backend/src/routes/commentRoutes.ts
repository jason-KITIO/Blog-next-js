import express from 'express';
import { createComment, getComments, deleteComment } from '../controllers/commentController';

const router = express.Router();

// Route to add a new comment
router.post('/', createComment);

// Route to get all comments
router.get('/', getComments);

// Route to delete a comment by ID
router.delete('/:id', deleteComment);

export default router;