import { Routes, Route } from "react-router-dom"; // Ensure it's from "react-router-dom", not "react-router"
// public
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";

import BlogDetail from "./pages/blogDetail";
import Footer from "./layouts/footer";
import Navbar from "./layouts/navbar";
// private
import Contact from "./pages/contact";
import Register from "./Auth/Register";
import Login from "./Auth/login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const isAuthenticated = false;

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow pt-20">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={<h1>Dashboard</h1>}
              />
            }
          /> */}
          <Route
            path="/about"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={<About />}
              />
            }
          />
          <Route
            path="/blog"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={<Blog />}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={<BlogDetail />}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={<Contact />}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={<h1>Profile</h1>}
              />
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
