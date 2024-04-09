import React from "react";
import { useDispatch } from "react-redux";

import plus from "../assets/img/plus.svg";
import minus from "../assets/img/minus.svg";
import {
  addCartValue,
  minusItemValue,
  removeCartValue,
} from "../redux/slices/cartSlice";

const CartItem = ({ id, name, price, count, sizes, imageUrl, types }) => {
  const dispatch = useDispatch();
  const plusItemClick = () => {
    dispatch(addCartValue({ id }));
  };
  const minusItemClick = () => {
    dispatch(minusItemValue({ id }));
  };
  const removeItemClick = () => {
    dispatch(removeCartValue({ id }));
  };

  return (
    <div className="content__cart">
      <div className="cart__title">
        <h2>{name}</h2>
        <h4>
          {types}, {sizes}гр.
        </h4>
      </div>
      <div>
        <img width={200} src={imageUrl} alt="Pel"></img>
      </div>
      <div className="cart__quantity">
        <img onClick={minusItemClick} width={20} src={minus} alt="minus" />
        {count}
        <img onClick={plusItemClick} width={20} src={plus} alt="plus" />
      </div>
      <div className="cart__price">
        {price * count} <b> ₽</b>
      </div>
      <div onClick={removeItemClick} className="cart__close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 
            12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 
            18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 
            5.63672L11.9997 10.5865Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default CartItem;
