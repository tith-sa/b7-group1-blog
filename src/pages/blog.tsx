import { useEffect, useState } from "react";
import Card from "../components/card";

interface ImageData {
  attributes: {
    url: string;
  };
}

interface BlogAttributes {
  title: string;
  description: string;
  image: {
    data: ImageData | null;
  };
}

interface Blog {
  id: number;
  attributes: BlogAttributes;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "http://localhost:1337/api/blogs?populate[author][populate]=avatar&populate=image&sort=createdAt:desc"
        );
        const data = await res.json();
        setBlogs(data.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <section className="from-blue-600 to-indigo-700 text-white rounded-xl mt-3 shadow-lg">
        <img
          className="w-230 h-80 mx-auto mb-4 rounded-xl"
          src="https://trailchronicles.com/wp-content/uploads/2025/01/b2cireland-travelinsurance.jpeg"
          alt="Hero"
        />
      </section>

      <div className="flex gap-2 mb-2 flex-wrap justify-center">
        {["Lifestyle", "Travel", "Food", "Fashion"].map((tag) => (
          <span
            key={tag}
            className="bg-gray-300 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full shadow-lg"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {blogs.map((blog) => {
          const { id, attributes } = blog;
          const imageUrl = attributes.image?.data?.attributes?.url;

          return (
            <Card
              key={id}
              title={attributes.title}
              descraption={attributes.description}
              image={
                imageUrl || "https://via.placeholder.com/300x200?text=No+Image"
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
