import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="nav bg-blue-500 text-white py-3 flex justify-center">
      <nav className="">
        <ul className="font-semibold flex-row flex gap-x-10">
          <li className="hover:text-gray-300">
            <Link to="/">Characters</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
