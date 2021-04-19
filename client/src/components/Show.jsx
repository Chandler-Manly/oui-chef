import { useParams } from "react-router-dom";

function Show(props) {
  const params = useParams();
  const showRecipe = props.recipes.find((recipe) => params.id === recipe.id);

  return (
    <div>
      <h3> {showRecipe.fields.title} </h3>
      <h4> {showRecipe.fields.ingredients} </h4>
      <h5> {showRecipe.fields.steps} </h5>
    </div>
  )
}

export default Show;