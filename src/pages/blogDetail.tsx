import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const BlogDetail = () => {
  const { id } = useParams();
  interface Blog {
    title: string;
    content: string;
    image?: { format: { thumbnail: { url: string } } }[];
  }

  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    // const response = axios.get(
    //   `localhost:1337/api/blogs/${id}`
    // );

    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/blogs/${id}?populate=*`
        );
        setBlog(response.data.data);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      }
    };
    fetchBlog();
  }, []);
  console.log("blog", blog);

  return (
    <div className="w-[50%] mx-auto bg-white shadow-2xl px-12 mt-12 rounded-2xl">
      <div>
        <h1 className="text-2xl text-pink-00">{blog?.title}</h1>
        <p>{blog?.content}</p>
      </div>
      <div className="w-full ">
        <img src={blog?.image?.url} alt="" />
      </div>
    </div>
  );
};
export default BlogDetail;
