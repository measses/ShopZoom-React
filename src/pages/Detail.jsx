import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsActionsDetail } from "../redux/actions/products";

import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { productsCard } from "../redux/actions/card";

const getDetailClasses = (isDarkMode) => {
  if (isDarkMode) {
    // Dark mode sınıfları
    return {
      container: "dark-mode-container",
      title: "dark-mode-title",
      // Diğer sınıflar
    };
  } else {
    // Light mode sınıfları
    return {
      container: "light-mode-container",
      title: "light-mode-title",
      // Diğer sınıflar
    };
  }
};


const Detail = ({ isDarkMode} ) => {
  const classes = getDetailClasses(isDarkMode);
  const { id } = useParams();
  const dispatch = useDispatch();
  // @ts-ignore
  const { product } = useSelector((state) => state.product);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // @ts-ignore
    dispatch(productsActionsDetail(id));
  }, [dispatch, id]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  

  const [favori, setFavori] = useState(false);

  const toggleFavori = () => {
    setFavori(!favori);
  };
  const [cartItems, setCartItems] = useState({});

  const addCard = () => {
    if (count === 0) {
      return;
    }




    // @ts-ignore
    dispatch(productsCard(id, count));
    dispatch({ type: "DRAWER", payload: true });
  };
  return (
    <div className={`container px-5 py-24 mx-auto ${classes.container}`}>
      <div className={`lg:w-4/5 mx-auto flex flex-wrap`}>
        <img
          className="w-1/3 mx-auto -mt-9 max-lg:flex justify-center items-center object-center"
          src={product?.image}
          alt={product?.title}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className={` text-3xl title-font font-medium mb-1 ${classes.title}`}>
            {product?.title}
          </h1>
          <h2 className="text-sm title-font  tracking-widest">
            Category: {product?.category}
          </h2>
          <div className="flex items-center space-x-2 mt-2">
            <span className="flex items-center ">
              {product?.rating?.rate}
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 text-red-500 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="ml-1">{product?.rating?.count} Yorum</span>
            </span>
            <div className="flex ml-auto items-center space-x-2">
              <button className="">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </button>
              <button className="">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </button>
              <button className="">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </button>
            </div>
          </div>
          <p className="leading-relaxed mt-4">{product?.description}</p>
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex items-center mt-6 border-b-2 border-gray-200 pb-5 max-sm:mt-2">
            <span className="title-font font-medium text-2xl  max-lg:mr-3">
              {product?.price}₺
            </span>
            <div className="ml-auto">
              <div className="flex items-center space-x-4 ">
                <button
                  onClick={decrement}
                  className="border rounded-full p-2 focus:outline-none"
                >
                  <CgMathMinus
                    className="  cursor-pointer"
                    size={9}
                  />
                </button>
                <span className="text-xl">{count}</span>
                <button
                  // @ts-ignore
                  onClick={() => increment(product?.rating?.count)}
                  className="border rounded-full p-2 focus:outline-none"
                >
                  <CgMathPlus
                    className=" cursor-pointer"
                    size={9}
                  />
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={toggleFavori}
                className="flex items-center ml-4 text-gray-500 focus:outline-none"
              >
                {favori ? (
                  <AiFillHeart size={30} />
                ) : (
                  <AiOutlineHeart size={30} />
                )}
                <span className="ml-1 text-sm">Favorilere Ekle</span>
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <button
              onClick={addCard}
              className="relative inline-flex items-center justify-center -mt-10 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-16 h-16 mb-8 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-10 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Sepete Ekle</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
