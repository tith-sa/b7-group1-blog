import { Routes, Route } from "react-router";
import Card from "./components/card";
import Home from "./pages/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
