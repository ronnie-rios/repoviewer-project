import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <ul className="flex flex-row p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 font-medium md:border-0">
            <Link to='/'><li className="block py-2 pl-3 pr-4 text-white  md:p-0">Home</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;