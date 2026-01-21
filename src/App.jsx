import React from "react";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default App;
