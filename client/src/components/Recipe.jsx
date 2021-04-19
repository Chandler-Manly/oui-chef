import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Recipes(props) {
  const ouiChef = async () => {
    const recipeURL = `${baseURL}/${props.recipe.id}`;
    await axios.delete(recipeURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  const { title, ingredients, steps } = props.recipe.fields;

  return (
    <div>
      <Link to={`/recipes/${props.recipe.id}`}>
        <h3>{title}</h3>
      </Link>
      <h4>{ingredients}</h4>
      <h5>{steps}</h5>
      <button onClick={ouiChef}>Oui, Chef!</button>
      <Link to={`/edit/${props.recipe.id}`}>
        <button>Edit!</button>
      </Link>
    </div>
  );
}
export default Recipes;