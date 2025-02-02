import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postController';    

const router = express.Router();

// Route to get all posts
router.get('/', getPosts);

//Route to get one post
router.get('/:id', getPost);

// Route to create a new post
router.post('/', createPost);

// Route to update a post by ID
router.put('/:id', updatePost);

// Route to delete a post by ID
router.delete('/:id', deletePost);

export default router;