import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  ingredients: [
    {
      type: String,
      required: true
    }
  ],
  instructions: {
    type: String,
    required: true,
    trim: true
  },
  
  servings: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;