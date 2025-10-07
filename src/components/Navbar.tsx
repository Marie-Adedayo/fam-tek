import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react"; 
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅

export default function Navbar() {
  const [query, setQuery] = useState("");
  const { items } = useCart(); // ✅ get cart items
  const navigate = useNavigate(); // ✅ for redirect to checkout

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };
  

  const cartCount = items.reduce((sum, i) => sum + i.qty, 0); // ✅ total quantity

  return (
    <nav className="bg-black shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/Images/famtek_logo.png" 
              alt="logo" 
              className="w-14 h-14"
            />
          </Link>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-1 w-72"
          >
            <input
              type="text"
              placeholder="Search gadgets..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <button type="submit" className="text-gray-600 hover:text-blue-600">
              <Search size={18} />
            </button>
          </form>

          {/* Cart Icon with badge */}
          <button
            onClick={() => navigate("/checkout")} // ✅ go to checkout page
            className="relative text-white hover:text-blue-500"
          >
            <ShoppingCart size={26} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white 
                               text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Search (optional) */}
      <div className="md:hidden px-4 pb-3">
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mt-3"
        >
          <input
            type="text"
            placeholder="Search gadgets..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <button type="submit" className="text-gray-600 hover:text-blue-600">
            <Search size={18} />
          </button>
        </form>
      </div>
    </nav>
  );
}
