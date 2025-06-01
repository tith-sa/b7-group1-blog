import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import BlogsCard from "../components/BlogsCard";
import { useTheme } from "../theme/themeContext";
import axios from "axios";

// Type definition for blog data structure
type BlogType = {
  id: number;
  documentId: string; // This is the important field for Strapi v5
  title?: string;
  content?: string;
  image?: any;
  [key: string]: any;
};

const Blog = () => {
  // State management for blogs, loading, and error handling
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // State for search functionality

  // Get theme context and navigation hook
  const { theme } = useTheme() as { theme: "dark" | "light" | undefined };
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Get base URL from environment variables
  const baseUrl = import.meta.env.VITE_API_KEY;

  // Fetch blogs when component mounts
  useEffect(() => {
    getBlogs();
  }, []);

  // Function to fetch blogs from Strapi API
  const getBlogs = async () => {
    try {
      setLoading(true);
      setError(""); // Clear any previous errors

      // Make API call to get blogs with populated image data
      const response = await axios.get<{ data: BlogType[] }>(
        `${baseUrl}/api/blogs?populate=*` // populate=* gets all related data including images
      );

      // Check if we got data and set it to state
      if (response.data?.data) {
        setBlogs(response.data.data);
      }

      setLoading(false);
    } catch (error) {
      // Handle errors gracefully
      setError("Failed to load blogs");
      setLoading(false);
      console.error("Error fetching blogs:", error);
    }
  };

  // Helper function to get image URL from Strapi response
  const getImageUrl = (imageData: any) => {
    // Check if we have image data from Strapi
    if (imageData?.url) {
      return `${baseUrl}${imageData.url}`;
    }
    // Fallback image if no image is provided
    return `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop`;
  };

  // Helper function to safely get blog title
  const getBlogTitle = (blog: BlogType) => {
    return blog.title || "Untitled Blog Post";
  };

  // Helper function to safely get blog content
  const getBlogContent = (blog: BlogType) => {
    return blog.content || "No content available for this blog post.";
  };

  // Function to handle comment button click - navigates to blog detail page
  const handleCommentClick = (blogDocumentId: string) => {
    console.log(
      "Navigating to blog detail page with documentId:",
      blogDocumentId
    );
    // Navigate to blog detail page with the documentId
    navigate(`/blog/${blogDocumentId}`);
  };

  // Function to handle search input changes
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter((blog) => {
    const title = getBlogTitle(blog).toLowerCase();
    const content = getBlogContent(blog).toLowerCase();
    const search = searchTerm.toLowerCase();

    return title.includes(search) || content.includes(search);
  });

  // Loading state UI
  if (loading) {
    return (
      <div
        className={`w-full min-h-screen ${
          theme === "dark"
            ? "bg-gray-900 text-gray-100"
            : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Animated loading spinner */}
            <div className="flex justify-center">
              <div
                className={`w-12 h-12 border-4 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                } rounded-full animate-spin border-t-blue-500`}
              ></div>
            </div>

            {/* Loading text */}
            <p
              className={`text-lg font-medium ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } animate-pulse`}
            >
              Loading blogs...
            </p>

            {/* Skeleton loader cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden shadow-md ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  {/* Skeleton image */}
                  <div
                    className={`h-48 ${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                    } animate-pulse`}
                  ></div>
                  <div className="p-4 space-y-4">
                    {/* Skeleton tags */}
                    <div className="flex gap-2">
                      <span
                        className={`${
                          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                        } h-6 w-16 rounded-full animate-pulse`}
                      ></span>
                      <span
                        className={`${
                          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                        } h-6 w-20 rounded-full animate-pulse`}
                      ></span>
                    </div>
                    {/* Skeleton title */}
                    <div
                      className={`${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                      } h-6 w-3/4 rounded animate-pulse`}
                    ></div>
                    {/* Skeleton content */}
                    <div className="space-y-2">
                      <div
                        className={`${
                          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                        } h-4 w-full rounded animate-pulse`}
                      ></div>
                      <div
                        className={`${
                          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                        } h-4 w-5/6 rounded animate-pulse`}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state UI
  if (error) {
    return (
      <div
        className={`w-full min-h-screen ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div
            className={`p-6 rounded-lg shadow-md ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-red-50 border border-red-100"
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Error Icon */}
              <div
                className={`p-3 rounded-full ${
                  theme === "dark"
                    ? "bg-red-900/30 text-red-400"
                    : "bg-red-100 text-red-600"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Error Message */}
              <h3
                className={`text-lg font-medium ${
                  theme === "dark" ? "text-red-400" : "text-red-600"
                }`}
              >
                Oops! Something went wrong
              </h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {error}
              </p>

              {/* Retry Button */}
              <button
                onClick={getBlogs}
                className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                  theme === "dark"
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-red-500 hover:bg-red-600 text-white"
                }`}
              >
                Try Again
              </button>

              {/* Help Text */}
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                If the problem continues, please contact support
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main component render
  return (
    <div
      className={`w-full min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-900"
      }`}
    >
      <main className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Page Header */}
        <header className="mb-8">
          <h1
            className={`text-3xl font-bold mb-2 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Our Blog
          </h1>
          <p
            className={`text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Discover stories, insights, and updates from our community
          </p>
        </header>

        {/* Search Section */}
        <section aria-labelledby="search-heading" className="mb-8">
          <h2 id="search-heading" className="sr-only">
            Search blogs
          </h2>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search blogs by title or content..."
              className={`w-full px-4 py-3 pl-12 rounded-lg shadow-sm border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base sm:text-lg ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
              aria-label="Search blog posts"
            />
            {/* Search Icon */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg
                className={`w-5 h-5 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Blog Results Info */}
        {searchTerm && (
          <div className="mb-6">
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {filteredBlogs.length > 0
                ? `Found ${filteredBlogs.length} blog${
                    filteredBlogs.length === 1 ? "" : "s"
                  } matching "${searchTerm}"`
                : `No blogs found matching "${searchTerm}"`}
            </p>
          </div>
        )}

        {/* Blog List Section */}
        <section aria-labelledby="blog-list-heading">
          <h2 id="blog-list-heading" className="sr-only">
            Blog posts
          </h2>

          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:gap-10">
              {filteredBlogs.map((blog) => (
                <BlogsCard
                  key={blog.documentId} // Use documentId as key for better React performance
                  id={blog.documentId} // Pass documentId as id prop
                  title={getBlogTitle(blog)}
                  content={getBlogContent(blog)}
                  image={getImageUrl(blog.image)}
                  theme={theme}
                  className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    theme === "dark" ? "shadow-gray-800" : "shadow-gray-200"
                  }`}
                  aria-label={`Blog post: ${getBlogTitle(blog)}`}
                  // Pass the comment handler to the card component
                  onComment={handleCommentClick}
                />
              ))}
            </div>
          ) : (
            // Empty state when no blogs are found
            <div className="flex justify-center items-center py-12 sm:py-16">
              <div
                className={`p-8 rounded-xl text-center max-w-md w-full ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <svg
                    className={`w-8 h-8 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3v6m0 0l3-3m-3 3L9 9"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-lg font-medium mb-2 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {searchTerm
                    ? "No matching blogs found"
                    : "No blogs available"}
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {searchTerm
                    ? "Try adjusting your search terms or clear the search to see all blogs"
                    : "Check back later for new blog posts"}
                </p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className={`mt-4 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      theme === "dark"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    Clear Search
                  </button>
                )}
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Blog;
