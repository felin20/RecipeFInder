// components/RecipeItem.js
import React from 'react';

const RecipeItem = ({ recipe }) => {
  return (
    <div className="recipe-item">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <p>{recipe.strCategory}</p>
      <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeItem;
