import cute from "../assets/sa.png";
import NX from "../assets/image.png";
const card = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4  mt-10">
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white">
          <img
            className="w-full h-80 object-cover"
            src={NX}
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
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              Puss in Boots: The Last Wish
            </h2>
            <p className="text-gray-600 text-sm line-clamp-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s...
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={cute}
                    alt="Puss in Boots"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Tith Sa</p>
                  <p className="text-xs text-gray-500">May 8 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
