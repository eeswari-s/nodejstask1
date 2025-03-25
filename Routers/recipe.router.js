import express from 'express';
import { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe } from '../controllers/recipeController.js';

const router = express.Router();

router.post('/recipes', createRecipe); 
router.get('/recipes', getAllRecipes); 
router.get('/recipes/:id', getRecipeById); 
router.put('/recipes/:id', updateRecipe); 
router.delete('/recipes/:id', deleteRecipe); 

export default router;