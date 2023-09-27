import React, { useState, useEffect } from "react";
import { BsLightbulb, BsBasket, BsFillMoonStarsFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../redux/actions/search";
import { ImExit } from "react-icons/im";

// Yüklenme durumunu temsil eden bileşen.
const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="text-white text-2xl">Loading...</div>
    </div>
  );
};

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [color, setColor] = useState(false);
  const dispatch = useDispatch();
  // @ts-ignore
  const { cardItems } = useSelector((state) => state.card);

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simüle edilmiş yükleme süreci (API'den ürünlerin yüklendiği düşünülüyor)
    setTimeout(() => {
      setIsLoading(false); // Yükleme tamamlandığında isLoading'i false yap
    }, 2000);
  }, []);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const searchPost = (e) => {
    if (e.key === "Enter") {
      // @ts-ignore
      dispatch(searchActions(search));
    }
  };

  const handleToggleDarkMode = (e) => {
    e.preventDefault();
    toggleDarkMode();
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-3 h-28">
      <div
        onClick={handleLogoClick}
        className="text-2xl font-bold tracking-wider cursor-pointer"
      >
        <span className="bg-gradient-to-r from-gray-500 to-red-500 bg-clip-text text-transparent">
          SHOP
        </span>
        <span className="bg-gradient-to-r from-red-500 to-rgb(255, 0, 0) bg-clip-text text-transparent">
          ZOOM
        </span>
      </div>

      <div className="mt-3 sm:mt-0 flex items-center space-x-4">
        <input
          className="border p-3 outline-none rounded-lg"
          type="text"
          placeholder="Search"
          value={search}
          onKeyPress={searchPost}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <div>
            <div className="cursor-pointer" onClick={handleToggleDarkMode}>
              {isDarkMode ? (
                <BsFillMoonStarsFill size={25} />
              ) : (
                <BsLightbulb size={25} />
              )}
            </div>
            <div></div>
          </div>
        </div>

        <div
          onClick={() => dispatch({ type: "DRAWER", payload: true })}
          className="relative"
        >
          <BsBasket size={30} className="cursor-pointer" />
          <span className="absolute -top-5 right-0 px-3 bg-red-600 text-white rounded-full text-sm">
            {isLoading ? "Loading..." : cardItems?.length}
          </span>
        </div>
      </div>

     
      {isLoading && <LoadingOverlay />}
    </div>
  );
};

export default Navbar;
