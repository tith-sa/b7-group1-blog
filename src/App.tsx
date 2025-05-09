import Navbar from "./layouts/navbar";
import { Routes, Route } from "react-router";
import Card from "./components/card";
import Home from "./pages/home";
const App = () => {
  return (
    <div>
      {/* Header */}
      <Navbar />
      {/* main content */}
      <Routes>
        {/* Defind the routes for the application here */}
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/services" element={<h1>Services</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/card" element={<Card />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* Footer */}
    </div>
  );
};

export default App;
