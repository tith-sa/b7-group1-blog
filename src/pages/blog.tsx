import { useEffect, useState } from "react";
import Card from "../components/card";

interface Blog {
  id: number;
  attributes?: {
    title: string;
    description: string;
    image?: {
      data?: {
        attributes?: {
          url: string;
        };
      };
    };
  };
}

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/blogs?populate=*")
      .then((res) => res.json())
      .then((data: { data: Blog[] }) => {
        setBlogs(data.data);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Banner Image */}
      <section className="from-blue-600 to-indigo-700 text-white rounded-xl mt-3 shadow-lg animate-fade-up transition-transform transform hover:scale-105">
        <img
          className="w-230 h-80 mx-auto mb-4 rounded-xl"
          src="https://trailchronicles.com/wp-content/uploads/2025/01/b2cireland-travelinsurance.jpeg"
          alt="Blog Banner"
        />
      </section>

      {/* Category Tags */}
      <div className="flex gap-2 mb-2 transition-transform transform hover:scale-105">
        {["Lifestyle", "Travel", "Food", "Fashion"].map((tag, index) => (
          <span
            key={tag}
            className={`bg-gray-300 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full shadow-lg ${
              index === 0 ? "ml-[205px]" : "ml-[70px]"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {blogs.map((blog) => {
          const attrs = blog.attributes;
          if (!attrs) return null;

          return (
            <Card
              key={blog.id}
              title={attrs.title}
              descraption={attrs.description}
              image={attrs.image?.data?.attributes?.url || ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
