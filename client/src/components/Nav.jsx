
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <img src="https://res.cloudinary.com/dygk00sc0/image/upload/v1618101006/Minimalist_Circle_Healthy_Cafe_Logo_1_tkollo.png" alt="company-logo"/>
      <Link to="/">Home</Link>
      <Link to="/new">Add New Recipe</Link>
      <Link to="/recipes">Today's Recipe</Link>
    </nav>
  )
}

export default Nav;