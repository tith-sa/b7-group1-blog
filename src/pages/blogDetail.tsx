import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        setComments([]); // Set empty array on error
      }
    };

    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment.trim()) return;

    try {
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
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen mx-auto bg-white shadow-2xl px-12 mt-12 rounded-2xl flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen mx-auto bg-white shadow-2xl px-12 mt-12 rounded-2xl flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="w-full min-h-screen mx-auto bg-white shadow-2xl px-12 mt-12 rounded-2xl flex items-center justify-center">
        <p>Blog post not found</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen mx-auto bg-white shadow-2xl px-12 mt-12 rounded-2xl">
      {blog.image?.data?.attributes?.url && (
        <img
          src={`http://localhost:1337${blog.image.data.attributes.url}`}
          alt="Blog visual"
          className="mb-6 w-full rounded-xl"
        />
      )}
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <p className="mb-8">{blog.content}</p>

      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Comments ({Array.isArray(comments) ? comments.length : 0})
        </h2>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment..."
            className="w-full p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
            rows={4}
            required
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Submit Comment
          </button>
        </form>

        {/* Comments List */}
        <div className="space-y-4">
          {Array.isArray(comments) &&
            comments.map((commentItem) => (
              <div key={commentItem.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  {commentItem.userAvatar && (
                    <img
                      src={commentItem.userAvatar}
                      alt="User avatar"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  )}
                  <span className="font-medium text-gray-700">
                    {commentItem.username || "Anonymous"}
                  </span>
                </div>
                <p className="text-gray-800">{commentItem.content}</p>
              </div>
            ))}
          {(!Array.isArray(comments) || comments.length === 0) && (
            <p className="text-gray-500 text-center py-8">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
