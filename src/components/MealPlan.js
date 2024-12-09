import React from 'react';

const MealPlan = ({ selectedRecipes, servings }) => {
  const totalValues = selectedRecipes.reduce(
    (totals, recipe) => recipe.ingredients.reduce(
      (recipeTotals, ingredient) => ({
        calories: recipeTotals.calories + ingredient.amount * ingredient.calories,
        protein: recipeTotals.protein + ingredient.amount * ingredient.protein,
        carbs: recipeTotals.carbs + ingredient.amount * ingredient.carbs,
        fat: recipeTotals.fat + ingredient.amount * ingredient.fat,
      }),
      totals
    ),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  return (
    <div>
      <h3>Meal Plan</h3>
      <p>Calories per serving: {(totalValues.calories / servings).toFixed(2)} kcal</p>
      <p>Protein per serving: {(totalValues.protein / servings).toFixed(2)} g</p>
      <p>Carbs per serving: {(totalValues.carbs / servings).toFixed(2)} g</p>
      <p>Fat per serving: {(totalValues.fat / servings).toFixed(2)} g</p>
    </div>
  );
};

export default MealPlan;
