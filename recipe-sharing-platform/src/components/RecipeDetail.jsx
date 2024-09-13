import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();  // Get recipe ID from URL parameters
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by its ID from the mock data
    const selectedRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500">Recipe not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-lg text-gray-600 mb-6">{recipe.summary}</p>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
