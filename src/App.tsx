import Navbar from "./layouts/navbar";
import { Routes, Route } from "react-router";
import Card from "./components/card";
import Cardhome from "./components/cardhome";
import Home from "./pages/home";
import Register from "./pages/register";
const App = () => {
  return (
    <div>
      {/* Header */}
      <Navbar />

      {/* main content */}
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/cardhome" element={<Cardhome />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* Footer */}
    </div>
  );
};

export default App;
