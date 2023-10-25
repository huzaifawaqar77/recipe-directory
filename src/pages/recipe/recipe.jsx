import "./recipe.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Recipe = () => {
  const { id } = useParams();
  const url = "http://localhost:4000/recipes/" + id;

  const { data, isLoading, error } = useFetch(url);
  return (
    <main>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <div className="recipe">
          <h2>{data.title}</h2>
          <p>{data.cookingTime}</p>
          <ul>
            {data.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p>{data.method}</p>
        </div>
      )}
    </main>
  );
};

export default Recipe;
