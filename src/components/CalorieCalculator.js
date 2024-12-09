import React from 'react';

const CalorieCalculator = ({ ingredients, servings }) => {
  const totalValues = ingredients.reduce(
    (totals, ingredient) => ({
      calories: totals.calories + ingredient.amount * ingredient.calories,
      protein: totals.protein + ingredient.amount * ingredient.protein,
      carbs: totals.carbs + ingredient.amount * ingredient.carbs,
      fat: totals.fat + ingredient.amount * ingredient.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  return (
    <div>
      <h3>Total for {servings} Servings</h3>
      <p>Calories: {(totalValues.calories / servings).toFixed(2)} kcal</p>
      <p>Protein: {(totalValues.protein / servings).toFixed(2)} g</p>
      <p>Carbs: {(totalValues.carbs / servings).toFixed(2)} g</p>
      <p>Fat: {(totalValues.fat / servings).toFixed(2)} g</p>
    </div>
  );
};

export default CalorieCalculator;
