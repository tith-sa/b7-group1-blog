const Register = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center  mt-30">
        <div className="w-full max-w-md p-8  rounded-md shadow-xl bg-gray-80 ">
          <h2 className="text-3xl font-bold text-center mb-2">Register</h2>
          <p className="text-center text-gray-600 mb-6">
            Kindly fill in this form to register.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full px-3 py-2 rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2  rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-3 py-2   rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Repeat Password
              </label>
              <input
                type="password"
                placeholder="Repeat password"
                className="w-full px-3 py-2  rounded bg-gray-100"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="#" className="text-red-600 underline">
              Log in.
            </a>
          </p>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 font-semibold">
            BLOG{" "}
            <span className="text-pink-500 font-signature">Management</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
