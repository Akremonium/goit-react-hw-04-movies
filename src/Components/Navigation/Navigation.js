import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <NavLink exact to="/">
      Home page
    </NavLink>
    <NavLink exact to="/movies">
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
