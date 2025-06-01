import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useTheme } from "../theme/themeContext";

interface Blog {
  title: string;
  content: string;
  image?: {
    data?: {
      attributes: {
        url: string;
      };
    };
  };
}

interface Comment {
  id: number;
  content: string;
  username?: string;
  userAvatar?: string;
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submittingComment, setSubmittingComment] = useState(false);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const response = await axios.get<{ data: Blog }>(
          `http://localhost:1337/api/blogs/${id}?populate=*`
        );
        setBlog(response.data.data);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      if (!id) return;

      try {
        const response = await axios.get<{ data?: Comment[] }>(
          `http://localhost:1337/api/comments?post_id=${id}`
        );
        // Handle different possible response structures
        const commentsData = response.data?.data || response.data || [];
        setComments(Array.isArray(commentsData) ? commentsData : []);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
        setComments([]);
      }
    };

    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment.trim()) return;

    try {
      setSubmittingComment(true);
      const response = await axios.post("http://localhost:1337/api/comments", {
        data: {
          content: comment,
          post_id: id,
        },
      });

      // Add the new comment to the list
      const data = response.data as {
        id?: number;
        username?: string;
        userAvatar?: string;
      };
      const newComment: Comment = {
        id: data.id || Date.now(),
        content: comment,
        username: data.username || "Anonymous",
        userAvatar: data.userAvatar,
      };

      setComments((prev) => [newComment, ...prev]);
      setComment("");
    } catch (error) {
      console.error("Failed to submit comment:", error);
      setError("Failed to submit comment");
    } finally {
      setSubmittingComment(false);
    }
  };

  // Loading state UI
  if (loading) {
    return (
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div
            className={`${
              isDark ? "bg-gray-800" : "bg-white"
            } rounded-2xl shadow-xl p-12 flex items-center justify-center min-h-96`}
          >
            <div className="text-center">
              <div
                className={`inline-block w-8 h-8 border-4 border-t-transparent rounded-full animate-spin mb-4 ${
                  isDark ? "border-blue-400" : "border-blue-600"
                }`}
              ></div>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Loading blog post...
              </p>
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
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div
            className={`${
              isDark ? "bg-gray-800" : "bg-white"
            } rounded-2xl shadow-xl p-12 flex items-center justify-center min-h-96`}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-red-600 text-lg font-semibold">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Not found state with theme support
  if (!blog) {
    return (
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div
            className={`${
              isDark ? "bg-gray-800" : "bg-white"
            } rounded-2xl shadow-xl p-12 flex items-center justify-center min-h-96`}
          >
            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <svg
                  className={`w-8 h-8 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Blog post not found
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-8">
        <article
          className={`${
            isDark ? "bg-gray-800" : "bg-white"
          } rounded-2xl shadow-xl overflow-hidden transition-colors duration-300`}
        >
          {/* Hero Image */}
          {blog.image?.data?.attributes?.url && (
            <div className="relative">
              <img
                src={`http://localhost:1337${blog.image.data.attributes.url}`}
                alt="Blog visual"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          )}

          {/* Content */}
          <div className="p-8 md:p-12">
            <header className="mb-8">
              <h1
                className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {blog.title}
              </h1>
              <div
                className={`h-1 w-20 rounded-full ${
                  isDark ? "bg-blue-400" : "bg-blue-600"
                }`}
              ></div>
            </header>

            <div
              className={`prose prose-lg max-w-none mb-12 ${
                isDark ? "prose-invert text-gray-300" : "text-gray-700"
              }`}
            >
              <p className="text-lg leading-relaxed whitespace-pre-wrap">
                {blog.content}
              </p>
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <section
          className={`mt-8 ${
            isDark ? "bg-gray-800" : "bg-white"
          } rounded-2xl shadow-xl p-8 md:p-12 transition-colors duration-300`}
        >
          <header className="mb-8">
            <h2
              className={`text-2xl md:text-3xl font-bold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Comments
            </h2>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {Array.isArray(comments) ? comments.length : 0} comment
              {comments.length !== 1 ? "s" : ""}
            </p>
          </header>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mb-10">
            <div className="mb-4">
              <label
                htmlFor="comment"
                className={`block text-sm font-medium mb-2 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Share your thoughts
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment here..."
                className={`w-full p-4 border-2 rounded-xl resize-none focus:outline-none focus:ring-2 transition-all duration-200 ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                    : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
                }`}
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              disabled={!comment.trim() || submittingComment}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                !comment.trim() || submittingComment
                  ? isDark
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : isDark
                  ? "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-lg hover:shadow-xl"
                  : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-lg hover:shadow-xl"
              }`}
            >
              {submittingComment ? (
                <>
                  <div className="w-4 h-4 border-2 border-t-transparent border-current rounded-full animate-spin"></div>
                  Publishing...
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Post Comment
                </>
              )}
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {Array.isArray(comments) && comments.length > 0 ? (
              comments.map((commentItem) => (
                <div
                  key={commentItem.id}
                  className={`p-6 rounded-xl border transition-all duration-200 hover:shadow-md ${
                    isDark
                      ? "bg-gray-700/50 border-gray-600 hover:bg-gray-700"
                      : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        isDark ? "bg-gray-600" : "bg-gray-300"
                      }`}
                    >
                      {commentItem.userAvatar ? (
                        <img
                          src={commentItem.userAvatar}
                          alt="User avatar"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <svg
                          className={`w-5 h-5 ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h4
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {commentItem.username || "Anonymous"}
                      </h4>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Just now
                      </p>
                    </div>
                  </div>
                  <p
                    className={`leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {commentItem.content}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <svg
                    className={`w-8 h-8 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  No comments yet
                </h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  Be the first to share your thoughts!
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetail;
