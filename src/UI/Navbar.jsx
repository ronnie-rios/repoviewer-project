import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-nav-color px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <ul className="flex flex-row p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 font-medium md:border-0">
            <Link to='/'><li className="block pl-3 pr-4"><button className="bg-btn-gray text-btn-text rounded p-4 border border-btn-gray hover:border-white">Home</button></li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;