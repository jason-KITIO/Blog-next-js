import express from 'express';
import { getCategories, getCategory, createCategory, updateCategory, deleteCategory } from '../controllers/categoryController';

const router = express.Router();

// Get all categories
router.get('/', getCategories);

// Get category by ID
router.get('/:id', getCategory);

// Create a new category
router.post('/', createCategory);

// Update a category
router.put('/:id', updateCategory);

// Delete a category
router.delete('/:id', deleteCategory);

export default router;