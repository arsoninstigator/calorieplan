import React from 'react';

const RecipeSelector = ({ recipes, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select a Recipe</option>
      {recipes.map((recipe) => (
        <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
      ))}
    </select>
  );
};

export default RecipeSelector;
