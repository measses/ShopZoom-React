import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import Card from "./components/Card";
import { useState } from "react";


function App() {
  // @ts-ignore
  const { drawer } = useSelector((state) => state.drawer);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>

        <BrowserRouter>
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products/:id" element={<Detail isDarkMode={isDarkMode} />} />
          </Routes>
          {drawer && <Card />}
          <Footer isDarkMode={isDarkMode} />
        </BrowserRouter>

    </div>
  );
}

export default App;
