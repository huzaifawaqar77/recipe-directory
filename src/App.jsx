import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Create from "./pages/create/create";
import Home from "./pages/home/home";
import Recipe from "./pages/recipe/recipe";
import Search from "./pages/search/search";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
