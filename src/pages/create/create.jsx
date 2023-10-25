import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";

const Create = () => {
  // state variables
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const navigate = useNavigate();
  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipe = {
      title,
      method,
      cookingTime: `${cookingTime} mins`,
      ingredients,
    };

    try {
      const response = await fetch("http://localhost:4000/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to create recipe");
      }
      if (response.ok) {
        navigate(`/`);
        console.log("Recipe created", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // handle add
  const handleAdd = () => {
    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient("");
    }
  };
  return (
    <main>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients</span>
          <div className="ingredients">
            <input
              type="text"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
            />
            <button type="button" onClick={handleAdd}>
              Add
            </button>
          </div>
          <p>
            Current Ingredients:{" "}
            {ingredients.map((i) => (
              <em key={i}>{i}, </em>
            ))}{" "}
          </p>
        </label>
        <label>
          <span>Recipe Method</span>
          <textarea
            type="text"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Cooking Time</span>
          <input
            type="number"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </main>
  );
};

export default Create;
