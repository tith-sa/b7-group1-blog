import Navbar from "./layouts/navbar";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  return (
    <div>
      {/* Header */}
      <Navbar />
      {/* main content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* Footer */}
    </div>
  );
};

export default App;
