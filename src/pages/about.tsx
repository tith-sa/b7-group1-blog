import { FaEdit, FaSearch, FaUser } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";

const about = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-30 gap-5 p-10 sm:px-20">
        <div className="my-auto">
          <h1 className="text-4xl font-bold mb-5">About Page</h1>
          <p className="text-lg">
            The purpose of a dynamic blog post website is to easily manage and
            display up-to-date content without changing the website’s code each
            time.
          </p>
        </div>
        <div className="m-auto">
          <img
            className="w-full"
            src="https://www.blogtyrant.com/wp-content/uploads/2020/02/how-long-should-a-blog-post-be.png"
            alt="picture hero"
          />
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center">Purpose</h2>
        <div className="grid grid-cols-1npx create-strapi-app@latest sm:grid-cols-4 gap-5 sm:gap-10 p-10 sm:px-20">
          <div className="">
            <h3 className="text-xl font-bold flex gap-2">
              <FaEdit color="blue" /> Easy to update content
            </h3>
            <p>Add posts without touching the code. </p>
          </div>
          <div className="">
            <h3 className="text-xl font-bold flex gap-2">
              <MdUpdate color="blue" /> Real-time changes
            </h3>
            <p>New posts appear instantly on the site.</p>
          </div>
          <div className="">
            <h3 className="text-xl font-bold flex gap-2">
              <FaSearch color="blue" /> Search and organize{" "}
            </h3>
            <p>Users can easily find posts using search or categories.</p>
          </div>
          <div className="">
            <h3 className="text-xl font-bold flex gap-2">
              <FaUser color="blue" /> User interaction
            </h3>
            <p>Supports comments, likes, and sharing to engage readers.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
