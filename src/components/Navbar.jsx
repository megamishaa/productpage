import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50 animate-fade-in-up">
      <div className="w-full mx-auto px-6 flex items-center h-24">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src="/cat13.jpeg" className="h-16 mr-5" alt="<3" />
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex text-xl space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Phones
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Earbuds
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Watches
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Accessories
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Offers
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Support
          </a>
        </div>

        {/* Right: Icons */}
        <div className="flex flex-1 items-center justify-end space-x-8 pr-10 text-gray-600 ">
          <button
            aria-label="Search"
            className="hover:text-blue-600 text-xl cursor-pointer"
          >
            <FaSearch size={25} />
          </button>
          <button
            aria-label="Shopping Cart"
            className="hover:text-blue-600 text-xl cursor-pointer"
          >
            <FaShoppingCart size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
}
