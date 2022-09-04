import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Healthy, tasty and hassle-free meals are waiting for you. <br />
        Start eating well today. <br />
        Guaranteed 30 - minute Free delivery!
        <br /> Order Now 👇
      </p>
    </section>
  );
};

export default MealsSummary;
