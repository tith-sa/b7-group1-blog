import { Routes, Route } from "react-router";
// public
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";

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
    <div className="w-full h-screen ">
      {/* Header */}
      <Navbar />

      {/* main content */}
      <main className="mt-12">
        <Routes>
          {/* Public Routes */}
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
          {/* Private Routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Protected Routes */}
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
