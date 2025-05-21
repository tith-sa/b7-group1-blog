const login = () => {
  return (
    <div className="min-h-screen h-[60px] flex items-center justify-center  ">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 h-120 transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome
        </h2>

        <form className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <button className="hover:underline">Forgot password?</button>
          <button className="hover:underline">Create account</button>
        </div>
      </div>
    </div>
  );
};
export default login;
