// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes(); // Initial filter on mount
  }, [filterRecipes]);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
