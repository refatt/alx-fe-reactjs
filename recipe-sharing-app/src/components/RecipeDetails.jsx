// src/components/RecipeDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import useRecipeStore from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = useRecipeStore(state => 
    state.recipes.find(recipe => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
