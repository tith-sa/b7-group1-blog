// import Navbar from "./layouts/navbar";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Footer from "./layouts/footer";
import Navbar from "./layouts/navbar";
import Blog from "./pages/blog";
import Login from "./pages/login";
import Profile from "./pages/profile";

const App = () => {
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
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
