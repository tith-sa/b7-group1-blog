import { Routes, Route } from "react-router";
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
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/detail/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={<h1>Dashboard</h1>}
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
