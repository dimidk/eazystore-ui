import React from "react";
import {
  faBasketShopping,
  faMoon,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "./PageTitle";
import emptyCartImage from "../assets/error.png";
import { Link, NavLink, replace } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  //this useNavigate to control user navigation and
  //return where I want and not to previous page

  const navigation = useNavigate();

  const handleClick = () => {
    console.log("Navigate programmatically instead of NavLink");
    navigation("/home", { state: { username: "dimi" } });
    //navigation(-1) got user's previous page
    //navigation(1) go to next page
    //navigation("/home", {replace}) replace the current entry to use stack
  };
  return (
    <div align="center">
      <PageTitle title="Your shopping cart" />
      <div>
        <p> Your cart is empty....</p>
        <img src={emptyCartImage} alt="Empty Cart" />
      </div>

      {/* <NavLink to="/home">Back to Products</NavLink> */}
      <button onClick={handleClick}>Back to products</button>
    </div>
  );
}
