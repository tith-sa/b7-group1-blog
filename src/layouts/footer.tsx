import { useTheme } from "../theme/themeContext";

const footer = () => {
  const { theme } = useTheme();

  const footerNavLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialMedia = [
    { name: "Facebook", path: "#" },
    { name: "Twitter", path: "#" },
    { name: "LinkedIn", path: "#" },
  ];

  return (
    <>
      <footer className="bg-gray-900 text-white py-10 mt-4">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2
              className={`text-xl font-semibold mb-3 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Blog Post
            </h2>
            <p className="text-sm text-gray-400">
              Delivering quality and excellence across every project.
            </p>
          </div>

          <div>
            <h3
              className={`text-xl font-semibold mb-3 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <ul className="flex items-center gap-6">
              {footerNavLinks.map((link, index1) => (
                <li key={index1}>
                  <a
                    href={link.path}
                    className={`text-base ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className={`text-xl font-semibold mb-3 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Follow Us
            </h3>
            <div className="flex space-x-4 text-gray-400">
              {socialMedia.map((item, index2) => (
                <a key={index2} href={item.path}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Blog Post Management.
        </div>
      </footer>
    </>
  );
};
export default footer;
