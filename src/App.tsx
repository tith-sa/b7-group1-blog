import { Routes, Route } from "react-router";
// public
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Login from "./pages/login";
import Profile from "./pages/profile";

import Footer from "./layouts/footer";
import Navbar from "./layouts/navbar";
// private
import Contact from "./pages/contact";
import Register from "./Auth/Register";
import Login from "./Auth/login";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogDetail from "./pages/blogDetail";
const App = () => {
  const isAuthenticated = false;
  return (
    <div className="w-full h-screen ">
      {/* Header */}
      <Navbar />

      {/* main content */}
      <Routes>
        {/* Defind the routes for the application here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/services" element={<h1>Services</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <main className="mt-12">
        <Routes>
          {/* Public Routes */}
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
          {/* Private Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<BlogDetail />} />
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
