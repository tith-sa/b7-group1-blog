import { useState } from "react";
import { Heart, Bookmark, MessageCircle } from "lucide-react";
interface CardhomeProps {
  Image: string;
  Title: string;
  Description: string;
}

const Cardhome = ({ Image, Title, Description }: CardhomeProps) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleLike = () => setLiked((prev) => !prev);
  const toggleSave = () => setSaved((prev) => !prev);

  return (
    <div className="bg-white  rounded-xl shadow-md max-w-xs w-60 overflow-hidden hover:shadow-lg transition relative">
      <img
        src={Image}
        alt="Drawing Course"
        className="w-full h-40 object-cover relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
      />
      <div className="p-4 pb-12">
        <a href="">
          <h3 className="text-sm font-bold mt-2  hover:text-blue-600">
            {Title}
          </h3>
        </a>
        <p className="text-gray-600 text-sm mt-1">{Description}</p>
      </div>

      <div className="absolute bottom-3 right-4 flex items-center gap-4 text-gray-500">
        <button onClick={toggleLike} className="hover:text-red-500 transition">
          <Heart
            className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : ""}`}
          />
        </button>

        <button
          onClick={toggleSave}
          className="hover:text-green-500 transition"
        >
          <Bookmark
            className={`w-5 h-5 ${
              saved ? "fill-green-500 text-green-500" : ""
            }`}
          />
        </button>

        <button className="hover:text-blue-500 transition">
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Cardhome;
