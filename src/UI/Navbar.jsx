import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <ul>
            <Link to='/'><li>Home</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar;