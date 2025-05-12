import Mana from "../assets/mana.png";
const Cardhome = () => {
  return (
    <>
      <div className="bg-blue-50 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-md max-w-xs w-full overflow-hidden hover:shadow-lg transition">
          <img
            src={Mana}
            alt="Drawing Course"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
              Beginner
            </span>
            <h3 className="text-sm font-bold mt-2">ULTIMATE DRAWING COURSE</h3>
            <p className="text-gray-600 text-sm mt-1">
              Adobe Illustrator CC – Advanced Training Course
            </p>
            <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
              ★★★★☆
              <span className="text-gray-500 text-xs ml-1">(1400)</span>
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white text-sm py-2 rounded hover:bg-blue-600 transition">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardhome;
