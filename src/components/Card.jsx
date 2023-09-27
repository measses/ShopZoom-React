import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../redux/actions/card";

const Card = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { cardItems } = useSelector((state) => state.card);

  const deleteCard = (id) => {
    // @ts-ignore.
    dispatch(removeCard(id));
  };

  const totalAmount = cardItems.reduce((total, card) => {
    return total + parseFloat(card.price) * card.qty;
  }, 0);

  return (
    <div className="w-full lg:w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3">
    <div className="flex items-center justify-between h-20">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-1">
        SEPETİM
      </h1>
      <AiOutlineClose
        onClick={() => dispatch({ type: "DRAWER", payload: false })}
        size={25}
        className="cursor-pointer"
      ></AiOutlineClose>
    </div>
  
    {cardItems?.map((card, i) => (
      <div key={i}>
        <div className="h-28 flex items-center justify-between">
          <img className="h-24" src={card?.image} alt="Ürün Resmi" />
          <div className="w-44">
            <div className="font-bold text-s sm:text-base">
              {(card?.title).substring(0, 40)} ({card?.qty})
            </div>
            <div className="opacity-70 text-xs sm:text-sm mt-2 text-start">
              {(card?.description).substring(0, 75)}
            </div>
          </div>
          <div className="font-bold text-xl sm:text-2xl m-3">
            {card?.price}₺
          </div>
          <div
            onClick={() => deleteCard(card.id)}
            className="bg-red-400 w-20 p-2 text-center text-white rounded-lg cursor-pointer hover:bg-red-600"
          >
            Sil
          </div>
        </div>
  
        <hr className="border-t border-gray-300 my-4" />
      </div>
    ))}
  
    <div className="text-right mt-3 mx-3">
      <p className="text-xl sm:text-2xl font-semibold">Toplam Tutar</p>
      <p className="text-2xl sm:text-3xl font-bold text-indigo-600">
        {totalAmount.toFixed(2)} TL
      </p>
    </div>
  </div>
  
  );
};

export default Card;
