import { useTheme } from "../theme/themeContext";

const footer = () => {
  const { theme } = useTheme();
  const footerNavLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <footer
        className={`py-10 mt-4 ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Blog Post</h2>
            <p className="text-sm text-gray-400">
              Delivering quality and excellence across every project.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="flex items-center gap-6">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-white">
                Facebook
              </a>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Blog Post Management.
        </div>
      </footer>
      ;
    </>
  );
};
export default footer;
