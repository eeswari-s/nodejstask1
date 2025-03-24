import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Database/config.js';
import recipeRoutes from './Routers/recipe.router.js';

dotenv.config()

const app = express();

app.use(express.json());

app.use('/api', recipeRoutes);

const port = process.env.PORT|| 5000;

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})