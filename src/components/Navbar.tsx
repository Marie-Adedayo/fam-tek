import { useState } from "react";
import { Menu, X, Search } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const links = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
    { name: "Deals", href: "/deals" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
    // 🔍 later, connect this to your product filter or backend search
  };

  return (
    <nav className="bg-black shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
                src="/Images/famtek_logo.png" 
                alt="logo" 
                className="w-14 h-14"
            />
          </div>

          {/* Search Bar (hidden on small screens) */}
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

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Small screen search icon */}
            <button onClick={handleSearch} className="text-gray-700 hover:text-blue-600">
              <Search size={22} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          {/* Mobile search bar */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mx-4 mt-3"
          >
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <button type="submit" className="text-gray-600 hover:text-blue-600">
              <Search size={18} />
            </button>
          </form>

          {/* Mobile Links */}
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
