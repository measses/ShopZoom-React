import React from "react";
import { useDispatch } from "react-redux";
import { productsCard } from "../redux/actions/card";

const ProductCard = ({ prd }) => {
  const dispatch = useDispatch();

  const addCard = (id, count) => {
   
    // @ts-ignore
    dispatch(productsCard(id, count));
    
    dispatch({ type: "DRAWER", payload: true });
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-[350px] border rounded-lg m-2 flex shadow shadow-blue-500/40 hover:shadow-indigo-500/40 flex-col items-center p-1 space-y-2 relative group overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
    
    <img
      onClick={() => (window.location.href = `https://fakestoreapi.com/products/${prd.id}`)}
      src={prd?.image}
      className="h-32 w-50 object-fill cursor-pointer"
      alt=""
    />
    <div className="font-bold h-16 text-center mt-2">
      {(prd?.title).substring(0, 45)}
    </div>
    <div className="text-center opacity-70 text-sm">
      {(prd?.description).substring(0, 55)}...
    </div>
    <div className="font-bold text-lg">{prd?.price} TL</div>
    <button
      onClick={() => addCard(prd.id, 1)}
      className="relative inline-flex items-center justify-center px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
      <span className="absolute bottom-0 right-0 block w-16 h-16 mb-8 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-10 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
      <span className="relative text-white">Sepete Ekle</span>
    </button>
  </div>


  );
};

export default ProductCard;
