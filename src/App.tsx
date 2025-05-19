// import Navbar from "./layouts/navbar";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./layouts/footer";
import Navbar from "./layouts/navbar";
import Blog from "./pages/blog";
import Register from "./Auth/Register";
const App = () => {
  return (
    <div className="w-full h-screen ">
      {/* Header */}
      <Navbar />

      {/* main content */}
      <main className="mt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
