import RecipeList from "../../components/recipelist/recipeList";
import { useFetch } from "../../hooks/useFetch";
import "./search.css";
const Search = () => {
  // look whats in the query params
  const query = new URLSearchParams(window.location.search);
  // get the value of the q from the search
  const search = query.get("q");
  console.log(search);
  // use the query params to fetch the data
  const { error, isLoading, data } = useFetch(
    `http://localhost:4000/recipes?q=${search}`
  );
  console.log(data);
  return (
    <main>
      <h2>Recipes Including "{search}"</h2>
      {error && <div className="error">{error}</div>}
      {isLoading && <div className="loading">Loading...</div>}
      {data && <RecipeList recipes={data} />}
    </main>
  );
};

export default Search;
