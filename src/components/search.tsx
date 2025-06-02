import { useEffect } from "react";
const Search = () => {
  return (
    <div className="w-full px-4 py-10 flex justify-center">
      <form className="w-full max-w-xl flex flex-col sm:flex-row items-stretch gap-3">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
