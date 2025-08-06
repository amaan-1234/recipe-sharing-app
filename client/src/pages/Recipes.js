import React, { useEffect, useState } from "react";
import axios from "../api/axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/recipes")
      .then((res) => {
        setRecipes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch recipes:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading recipes...</p>;

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
  <div className="recipes-container">
    <h2 style={{ textAlign: 'center' }}>All Recipes</h2>
    <ul className="recipes-list">
      {recipes.map((recipe) => (
        <li key={recipe._id} className="recipe-card">
          <h3 className="recipe-title">{recipe.title}</h3>
          <p className="recipe-description">{recipe.description}</p>

          <strong>Ingredients:</strong>
          <ul className="ingredients-list">
            {recipe.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <strong>Steps:</strong>
          <ol className="steps-list">
            {recipe.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </li>
      ))}
    </ul>
  </div>
);

};

export default Recipes;
