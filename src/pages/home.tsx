import management from "../assets/management.png";
const Home = () => {
  return (
    <>
      <div className="min-h-screen flex items-center px-2 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
              Get Paid
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              by Selling Guest Posts &<br /> Publishing Content
            </h2>
            <p className="text-gray-600">
              Join thousands on Bloggers on Blog Management by publishing High-
              Quality Content and earning handsomely. Sign Up on the platform
              and make money from today!
            </p>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-md bg-blue-100 border border-blue-300 focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700">
                Sign Up Now
              </button>
            </div>
          </div>

          <div className="flex justify-center h-100">
            <img
              src={management}
              alt="Person on computer"
              className="max-w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
