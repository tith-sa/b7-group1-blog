import { useState } from "react";
import { useTheme } from "../theme/themeContext";
import ThemeToggle from "../theme/themeToggle";
import { Home, User, Newspaper, Mail } from "lucide-react";
import { useLocation } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation(); // ← Get current route

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Blogs", path: "/services", icon: Newspaper },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <header
      className={`w-full h-auto fixed z-10 top-0 left-0 ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          Blog Posts
        </a>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
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
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li
                  key={item.name}
                  className="group relative flex flex-col items-center"
                >
                  <a
                    href={item.path}
                    className={`flex flex-col items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "text-blue-500"
                        : "text-inherit hover:text-blue-600"
                    }`}
                  >
                    <span
                      className={`p-2 rounded-lg ${
                        isActive
                          ? theme === "dark"
                            ? "bg-black"
                            : "bg-white"
                          : theme === "dark"
                          ? "hover:bg-gray-600"
                          : "hover:bg-gray-400"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                    </span>
                    <span className="absolute mt-18 px-2 py-1 text-white bg-black text-sm rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}

            <li className="border-l pl-4 border-gray-600">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
        aria-label="Mobile navigation menu"
      >
        <nav>
          <ul
            className={`flex flex-col space-y-3 p-5 rounded-lg shadow-md ${
              theme === "dark"
                ? "bg-gray-800 text-gray-100"
                : "bg-white text-gray-800"
            }`}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 ease-in-out ${
                      isActive
                        ? theme === "dark"
                          ? "bg-gray-700 text-white font-medium"
                          : "bg-gray-100 text-gray-900 font-medium"
                        : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}

            <li className="pt-2 border-t border-gray-600">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
