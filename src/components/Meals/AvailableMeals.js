import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import chicken from "../../assets/chicken.jpg";
import lentil from "../../assets/lentil.jpg";
import quinoa from "../../assets/quinoa.jpg";
import salad from "../../assets/green-salad.jpg";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Curry Chicken",
    price: 22.99,
    image: chicken,
  },
  {
    id: "m2",
    name: "Lentil Soup",
    price: 16.99,
    image: lentil,
  },
  {
    id: "m3",
    name: "Quinoa",
    price: 12.99,
    image: quinoa,
  },
  {
    id: "m4",
    name: "Green Salad",
    price: 18.99,
    image: salad,
  },
];

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      {mealsList.map((meal) => {
        return <Card key={meal.key}>{meal}</Card>;
      })}
    </section>
  );
};

export default AvailableMeals;
