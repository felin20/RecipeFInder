// RecipeList.js
import React from 'react';
import RecipeItem from './RecipeItem';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
