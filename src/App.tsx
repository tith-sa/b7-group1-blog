// import Navbar from "./layouts/navbar";
import { Routes, Route } from "react-router";
import Footer from "./layouts/footer";

const App = () => {
  return (
    <div className="w-full h-screen ">
      {/* Header */}
      {/* <Navbar /> */}
      {/* main content */}
      <Routes>
        {/* Defind the routes for the application here */}
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/services" element={<h1>Services</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
