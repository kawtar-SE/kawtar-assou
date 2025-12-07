import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRating from "./pages/TopRating";
import Movlie from "./pages/Movlie";
import Login from "./pages/Signin";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Movlie />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/TopRating" element={<TopRating />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signin" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
