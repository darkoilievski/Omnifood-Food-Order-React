import React from "react";
import mealsImage from "../../assets/girl-eating.jpg";
import omnifood from "../../assets/omnifood-logo.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <img src={omnifood} alt='omnifood-logo' className={classes.omnifood} />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='food on a table' />
      </div>
    </>
  );
};

export default Header;
