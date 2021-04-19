import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Nav from "./components/Nav";
import Recipe from "./components/Recipe";
import Form from "./components/Form"
import Show from "./components/Show"
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getRecipes = async () => {
      const resp = await axios.get(baseURL, config);
      setRecipes(resp.data.records);
    };
    getRecipes();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <h3>Recipes: All Day</h3>
      <Route exact path="/">
        <div className="recipes-container">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              recipe={recipe}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </div>
      </Route>

      <Route path="/new">
        <Form recipes={recipes} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/edit/:id">
        <Form recipes={recipes} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/recipes/:id">
        <div className="show-component">
          <h3>Today's Menu!</h3>
          {/* render specific meal on the today's page */}
          <Show recipes={recipes} />
          
      </div>
      </Route>
    </div>
  );
}

export default App;