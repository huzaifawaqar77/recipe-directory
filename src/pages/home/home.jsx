import "./home.css";

// hooks
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/recipelist/recipeList";

const Home = () => {
  const { data, loading, error } = useFetch("http://localhost:4000/recipes");
  return (
    <main>
      {error && <div className="error">{error}</div>}
      {loading && <div className="loading">{loading}</div>}
      {data && <RecipeList recipes={data} />}
    </main>
  );
};

export default Home;
