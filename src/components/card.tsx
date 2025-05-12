import { useState } from "react";
import cute from "../assets/sa.png";

interface CardProps {
  title: string;
  descraption: string;
  image: string;
}

const Card = ({ title, descraption, image }: CardProps) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white mt-4">
      <img
        className="w-full h-50 object-cover"
        src={image}
        alt="Puss in Boots"
      />
      <div className="p-4">
        <div className="flex gap-2 mb-2">
          <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
            DreamWorks
          </span>
          <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
            Animated
          </span>
        </div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-3">{descraption}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <img className="w-8 h-8 rounded-full" src={cute} alt="Tith Sa" />
            <div>
              <p className="text-sm font-medium text-gray-700">Tith Sa</p>
              <p className="text-xs text-gray-500">May 8 2025</p>
            </div>
          </div>

          {/* Comment and Like Icons */}
          <div className="flex items-center space-x-4 text-gray-500">
            {/* Comment */}
            <button className="hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3v3l3-3h6a2 2 0 002-2z" />
              </svg>
            </button>

            {/* Heart */}
            <button
              onClick={toggleLike}
              className={
                liked ? "text-red-500" : "text-gray-500 hover:text-red-400"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
