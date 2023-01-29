import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-nav-color sticky top-0 left-0 right-0 p-2">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <ul className="flex flex-row font-medium">
            <Link to='/'><li className="block pl-3 pr-4"><button className="bg-btn-gray text-btn-text rounded p-2 border border-btn-gray hover:border-white">Home</button></li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;