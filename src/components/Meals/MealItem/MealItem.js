import React, { useContext } from "react";
import CartContext from "../../../context-store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <>
      <div className={classes.meal}>
        <div>
          <img src={props.image} alt='meal' className={classes.image} />
        </div>
        <div className={classes.data}>
          <h3>{props.name}</h3>
          <div className={classes.price}>{price}</div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </>
  );
};

export default MealItem;
