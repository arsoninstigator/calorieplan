import React from "react";

function IngredientList({ ingredients, onAdjust }) {
  const handleSliderChange = (index, event) => {
    const newAmount = parseFloat(event.target.value); 
    onAdjust(index, newAmount); 
  };

  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
          <label>{ingredient.name}: {ingredient.amount} {ingredient.unit}</label>
          <input
            type="range"
            min="0"
            max="500" 
            step="1"
            value={ingredient.amount} 
            onChange={(e) => handleSliderChange(index, e)}
          />
        </div>
      ))}
    </div>
  );
}

export default IngredientList;
