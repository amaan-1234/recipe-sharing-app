import React, { useState } from "react";
import axios from "../api/axios";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data - split ingredients and steps by comma
    const data = {
      title,
      description,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split(",").map((s) => s.trim()),
    };

    try {
      await axios.post("/api/recipes", data);
      setMessage("Recipe added successfully!");
      setTitle("");
      setDescription("");
      setIngredients("");
      setSteps("");
    } catch (error) {
      setMessage("Failed to add recipe.");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label><br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Ingredients (comma separated):</label><br />
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div>
          <label>Steps (comma separated):</label><br />
          <input
            type="text"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>Add Recipe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddRecipe;
