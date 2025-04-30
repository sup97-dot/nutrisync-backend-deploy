const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipes');
const mealPlanRoutes = require('./routes/mealplan');
const nutritionRoutes = require('./routes/nutrition');
const guestNutritionRoutes = require('./routes/guestNutrition');
const mealRatingRoutes = require('./routes/mealrating');

const app =express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/mealplan', mealPlanRoutes);
app.use('/api/nutrition', nutritionRoutes);
app.use('/api/guest', guestNutritionRoutes);
app.use('/api/mealrating', mealRatingRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http:localhost:${PORT}`);
});