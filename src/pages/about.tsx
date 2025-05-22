import { FaEdit, FaSearch, FaUser } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { useTheme } from "../theme/themeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      } transition-colors duration-300`}
    >
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Blog
            </h1>
            <p
              className={`text-lg md:text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } leading-relaxed`}
            >
              Our dynamic blog platform empowers creators to share and manage
              content effortlessly, delivering up-to-date posts without altering
              the website’s code.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-md"
              src="https://www.blogtyrant.com/wp-content/uploads/2020/02/how-long-should-a-blog-post-be.png"
              alt="Dynamic blog platform illustration"
              sizes="(max-width: 640px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Purpose
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaEdit className="text-blue-500" size={24} />,
              title: "Easy Content Updates",
              description:
                "Add and edit posts seamlessly without touching the code.",
            },
            {
              icon: <MdUpdate className="text-blue-500" size={24} />,
              title: "Real-Time Publishing",
              description:
                "New posts appear instantly, keeping your audience engaged.",
            },
            {
              icon: <FaSearch className="text-blue-500" size={24} />,
              title: "Search & Organize",
              description:
                "Effortlessly find posts with powerful search and category features.",
            },
            {
              icon: <FaUser className="text-blue-500" size={24} />,
              title: "User Engagement",
              description:
                "Foster interaction with comments, likes, and sharing options.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md text-center ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p
                className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              src: "https://images01.nicepagecdn.com/page/87/29/one-page-template-preview-87293.jpg",
              alt: "Blog page layout preview",
            },
            {
              src: "https://upskilluniverse.com/wp-content/uploads/2024/06/lxp-upscaled-768x378.jpeg",
              alt: "Blog content management preview",
            },
          ].map((image, index) => (
            <div key={index}>
              <img
                className="w-full h-auto object-cover rounded-lg shadow-md"
                src={image.src}
                alt={image.alt}
                sizes="(max-width: 640px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
