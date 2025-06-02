import { useState } from "react";
import { Heart, MessageCircle, Calendar, Tag } from "lucide-react";

interface CardProps {
  id: string; // This will be the documentId from Strapi
  title: string;
  content: string;
  image: string;
  theme?: "light" | "dark";
  className?: string;
  tags?: string[];
  author?: {
    name: string;
    avatar: string;
  };
  date?: string;
  onLike?: (liked: boolean) => void;
  onComment?: (documentId: string) => void; // Updated to accept documentId
  isLiked?: boolean;
  likeCount?: number;
  commentCount?: number;
}

const BlogsCard = ({
  id, // This is the documentId from Strapi
  title,
  content,
  image,
  theme = "light",
  className = "",
  tags = ["Tech", "Blog"],
  author = { name: "Blog Author", avatar: "/api/placeholder/40/40" },
  date = "May 8, 2025",
  onLike,
  onComment, // Function to handle comment click
  isLiked: controlledLiked,
  likeCount = 0,
  commentCount = 0,
}: CardProps) => {
  // State for internal like management
  const [internalLiked, setInternalLiked] = useState(false);

  // Use controlled state if provided, otherwise use internal state
  const liked = controlledLiked !== undefined ? controlledLiked : internalLiked;

  // Function to handle like button click
  const toggleLike = () => {
    const newLikedState = !liked;

    // Update internal state if not controlled
    if (controlledLiked === undefined) {
      setInternalLiked(newLikedState);
    }

    // Call the onLike callback if provided
    onLike?.(newLikedState);
  };

  // Function to handle comment button click
  const handleComment = () => {
    console.log("Comment button clicked for blog:", id);
    // Call the onComment callback with the documentId
    onComment?.(id);
  };

  // Theme configurations for different visual states
  const themeClasses = {
    light: {
      card: "bg-white border border-gray-100 hover:shadow-lg",
      title: "text-gray-900",
      content: "text-gray-600",
      tag: "bg-blue-50 text-blue-700 border border-blue-200",
      author: "text-gray-700",
      date: "text-gray-500",
      icon: "text-gray-500 hover:text-gray-700",
      likedIcon: "text-red-500 hover:text-red-600",
      commentIcon: "text-blue-500 hover:text-blue-600",
    },
    dark: {
      card: "bg-gray-800 border border-gray-700 hover:shadow-2xl",
      title: "text-gray-100",
      content: "text-gray-300",
      tag: "bg-gray-700 text-gray-300 border border-gray-600",
      author: "text-gray-300",
      date: "text-gray-400",
      icon: "text-gray-400 hover:text-gray-200",
      likedIcon: "text-red-400 hover:text-red-300",
      commentIcon: "text-blue-400 hover:text-blue-300",
    },
  };

  const currentTheme = themeClasses[theme];

  // Helper function to truncate content for preview
  const truncateContent = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <article
      className={`max-w-sm rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:scale-[1.02] ${currentTheme.card} ${className}`}
      role="article"
      aria-labelledby={`card-title-${id}`}
    >
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          src={image}
          alt={`Cover image for ${title}`}
          loading="lazy"
          onError={(e) => {
            // Fallback image if the original fails to load
            const target = e.target as HTMLImageElement;
            target.src =
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop";
          }}
        />
        {/* Overlay effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Tags Section */}
        {tags.length > 0 && (
          <div
            className="flex flex-wrap gap-2 mb-3"
            role="list"
            aria-label="Blog tags"
          >
            {tags.slice(0, 2).map(
              (
                tag,
                index // Limit to 2 tags for cleaner look
              ) => (
                <span
                  key={index}
                  className={`${currentTheme.tag} text-xs font-medium px-3 py-1 rounded-full inline-flex items-center gap-1 transition-colors duration-200`}
                  role="listitem"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              )
            )}
            {tags.length > 2 && (
              <span
                className={`${currentTheme.tag} text-xs font-medium px-3 py-1 rounded-full`}
              >
                +{tags.length - 2} more
              </span>
            )}
          </div>
        )}

        {/* Blog Title */}
        <h2
          id={`card-title-${id}`}
          className={`text-xl font-bold mb-3 leading-tight line-clamp-2 ${currentTheme.title}`}
          title={title} // Show full title on hover
        >
          {title}
        </h2>

        {/* Blog Content Preview */}
        <p
          className={`text-sm leading-relaxed line-clamp-3 mb-4 ${currentTheme.content}`}
          title={content} // Show full content on hover
        >
          {truncateContent(content)}
        </p>

        {/* Card Footer */}
        <div className="flex items-center justify-between">
          {/* Author Information */}
          <div className="flex items-center space-x-3">
            <img
              className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-600"
              src={author.avatar}
              alt={`${author.name}'s profile picture`}
              onError={(e) => {
                // Fallback avatar if the original fails to load
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  author.name
                )}&background=random`;
              }}
            />
            <div className="min-w-0 flex-1">
              <p
                className={`text-sm font-medium truncate ${currentTheme.author}`}
                title={author.name}
              >
                {author.name}
              </p>
              <div
                className={`text-xs flex items-center gap-1 ${currentTheme.date}`}
              >
                <Calendar className="w-3 h-3" />
                <time dateTime={date} title={`Published on ${date}`}>
                  {date}
                </time>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Comment Button - This will navigate to blog detail page */}
            <button
              onClick={handleComment}
              className={`p-2 rounded-full transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 group ${currentTheme.commentIcon}`}
              aria-label={`View comments for ${title}`}
              title="View comments and add your own"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {commentCount > 0 && (
                <span className="ml-1 text-xs font-medium">
                  {commentCount > 99 ? "99+" : commentCount}
                </span>
              )}
            </button>

            {/* Like Button */}
            <button
              onClick={toggleLike}
              className={`p-2 rounded-full transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                liked ? currentTheme.likedIcon : currentTheme.icon
              }`}
              aria-label={liked ? `Unlike ${title}` : `Like ${title}`}
              aria-pressed={liked}
              title={liked ? "Remove like" : "Like this post"}
            >
              <Heart
                className={`w-5 h-5 transition-all duration-200 group-hover:scale-110 ${
                  liked ? "fill-current scale-110" : ""
                }`}
              />
              {(likeCount > 0 || liked) && (
                <span className="ml-1 text-xs font-medium">
                  {(() => {
                    // Calculate like count display logic
                    let displayCount = likeCount;
                    if (liked && controlledLiked === undefined) {
                      displayCount = likeCount + 1;
                    }
                    return displayCount > 99 ? "99+" : displayCount;
                  })()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogsCard;
