import Navbar from "./layouts/navbar";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div>
      {/* Header */}
      <Navbar />
      {/* main content */}
      <Routes>
        {/* Defind the routes for the application here */}
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/services" element={<h1>Services</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      {/* Footer */}
    </div>
  );
};

export default App;
