import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function NavBar() {
  const { token } = useSelector((state) => state.auth);
  return (
    <nav className="max-w-screen-xl mx-auto mt-2 bg-slate-200 rounded-lg">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4 pr-0 pt-0 pb-0 border-2 rounded-lg ">
        <Link to="https://flowbite.com/" className="flex items-center">
          <img src={logo} className="h-10 mr-2" alt="Quirko Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Quirko
          </span>
        </Link>
        <div
          className="items-center justify-between hidden md:flex md:w-auto md:order-1 bg-gray-800 p-2 rounded-lg w-full shadow-lg"
          id="navbar-user"
        >
          <ul className=" text-white flex space-x-6 text-sm px-16 p-2">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/posts" className="hover:text-blue-400">
                Posts
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
            {token === null && (
              <li>
                <Link to="/login" className="hover:text-blue-400">
                  SignIn
                </Link>
              </li>
            )}
          </ul>
          {token != null && (
            <Link
              to="/profile"
              className="flex justify-center items-center pr-4"
            >
              <div className="text-bold text-blue-400 mr-4">Username</div>
              <img
                src={logo}
                className="rounded-full border-2 h-9 w-9 hover:cursor-pointer "
                alt="User Profile Picture"
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
