
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Add New Recipe</Link>
      <Link to="/recipes">Today's Recipe</Link>
    </nav>
  )
}

export default Nav;