import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRating from "./pages/TopRating";
import Movlie from "./pages/Movlie";
import Signin from "./pages/Signin";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container" style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main content */}
      <div style={{ flex: 1, marginLeft: sidebarOpen ? "200px" : "50px", transition: "margin-left 0.3s" }}>
        {/* Navbar */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Pages */}
        <div className="content" style={{ marginTop: "70px", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Movlie />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Popular" element={<Popular />} />
            <Route path="/TopRating" element={<TopRating />} />
            <Route path="/Signin" element={<Signin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
