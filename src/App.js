import React, { useState } from 'react';
import RecipeSelector from './components/RecipeSelector';
import IngredientList from './components/IngredientList';
import CalorieCalculator from './components/CalorieCalculator';
import MealPlan from './components/MealPlan';
import recipes from './recipes.json';
import './styles.css';


const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [mealPlan, setMealPlan] = useState([]);
  const [servings, setServings] = useState(1);

  const handleRecipeSelect = (selectedRecipeName) => {
    const recipe = recipes.find((r) => r.name === selectedRecipeName); 
    if (recipe) {
      setSelectedRecipe(recipe); 
    } else {
      console.error("Recipe not found:", selectedRecipeName);
      setSelectedRecipe(null); 
    }
  };
  

  const handleIngredientAdjust = (index, newAmount) => {
    if (!selectedRecipe) return;
    const updatedIngredients = [...selectedRecipe.ingredients];
    updatedIngredients[index] = {
      ...updatedIngredients[index],
      amount: newAmount, 
    };
    setSelectedRecipe({ ...selectedRecipe, ingredients: updatedIngredients });
  };
  
  

  const addToMealPlan = () => {
    if (selectedRecipe) {
      setMealPlan([...mealPlan, selectedRecipe]);
    }
  };

  return (
    <div className="App">
      <h1>CaloriePlan - Calorie Counting Meal Planner</h1>
      <RecipeSelector recipes={recipes} onSelect={handleRecipeSelect} />
      {selectedRecipe && (
        <>
          <IngredientList
            ingredients={selectedRecipe.ingredients}
            onAdjust={handleIngredientAdjust}
          />
          <CalorieCalculator ingredients={selectedRecipe.ingredients} servings={servings} />
          <button onClick={addToMealPlan}>Add to Meal Plan</button>
        </>
      )}
      <input
        type="number"
        min="1"
        value={servings}
        onChange={(e) => setServings(parseInt(e.target.value))}
        placeholder="Servings"
      />
      <MealPlan selectedRecipes={mealPlan} servings={servings} />
    </div>
  );
};

export default App;
