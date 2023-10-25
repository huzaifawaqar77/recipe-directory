import { Link } from "react-router-dom";
import "./recipeList.css";
const RecipeList = ({ recipes }) => {
  if (recipes.length === 0)
    return <div className="no-recipes">No Recipes Found!</div>;
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="card" key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.cookingTime} to cook.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link className="recipe-list-button" to={"/recipe/" + recipe.id}>
            Read More.
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
