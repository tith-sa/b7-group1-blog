import { useState } from "react";
import { useTheme } from "../theme/themeContext";
import ThemeToggle from "../theme/themeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  // Toggle menu function
  const toggleMenu = () => setIsOpen(!isOpen);

  // NavItems
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Text Logo
  const Logo = [{ name: "Blog Posts", path: "/" }];

  return (
    <header
      className={`w-full h-auto ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          {Logo.map((item) => (
            <span key={item.name}>{item.name}</span>
          ))}
        </a>

        {/* Hamburger button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close icon (X)
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 p-4 bg-gray-700">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className="block px-2 py-2 rounded hover:bg-gray-600 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
