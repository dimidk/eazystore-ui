import React from "react";
import PageTitle from "./PageTitle";
import Header from "./Header";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const userRouteError = useRouteError();
  return (
    <div>
      <Header />
      <PageTitle title={userRouteError.status} />
      <div>
        <img src="../assets/error.png" alt="Error" />
        <p>{userRouteError.data}</p>
        <Link to="/home">Back to Home</Link>
      </div>
      <Footer />
    </div>
  );
}
