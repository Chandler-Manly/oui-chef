import { useEffect, useState } from "react";
import { useHistory, useParams }from "react-router-dom" ;
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [ingredients, setIngredients] = useState("");
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("");

  const history = useHistory();
  const params = useParams();
  
  useEffect(() => {
    if (props.recipes.length > 0 && params.id) {
      const foundRecipe = props.recipes.find((rec) => params.id === rec.id);
      if (foundRecipe) {
        setTitle(foundRecipe.fields.title);
        setSteps(foundRecipe.fields.steps);
        setIngredients(foundRecipe.fields.ingredients);
      }
    }
  }, [props.recipes, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      ingredients,
      title,
      steps,
    };
    if (params.id) {
      const recipeURL = `${baseURL}/${params.id}`;
      await axios.put(recipeURL, { fields }, config);
      
    }else{
    await axios.post(baseURL, { fields }, config);
  }
      props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
         
    <form onSubmit={handleSubmit}>
      <label htmlFor="ingredients">ingredients:</label>
      <input
        id="ingredients"
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)} />
      <label htmlFor="steps">steps:</label>
      <input
        id="steps"
        type="text"
        value={steps}
        onChange={(e) => setSteps(e.target.value)} />
      
      <label htmlFor="title">title:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
   
        <button type="submit">Cook!</button>
    </form>
    
  )
}

export default Form