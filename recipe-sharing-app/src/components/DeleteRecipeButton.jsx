import React from 'react';
import { useRecipeStore } from '../store/recipeStore';  // Adjust path as necessary
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();  // Hook for navigation

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');  // Redirect to the homepage or another route after deletion
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
