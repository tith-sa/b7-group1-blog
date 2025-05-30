import { Routes, Route } from "react-router-dom";
// public
import Home from "./pages/home";
// layouts
import Footer from "./layouts/footer";
import Navbar from "./layouts/navbar";
// private
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Register from "./Auth/Register";
import Login from "./Auth/login";
import ProtectedRoute from "./components/ProtectedRoute";
import Search from "./components/search";

const App = () => {
  const isAuthenticated = true; // Set to true for testing

  const blogs = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Advanced JavaScript" },
    { id: 3, title: "CSS Tricks" },
  ];

  return (
    <div className="w-full h-screen">
      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main className="mt-12">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Protected Routes */}

          <Route
            path="/about"
            element={
              <ProtectedRoute
                element={<About />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/blog"
            element={
              <ProtectedRoute
                element={<Blog />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute
                element={<Contact />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute
                element={<Search />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                element={<h1>Dashboard</h1>}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={<h1>Profile</h1>}
                isAuthenticated={isAuthenticated}
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
