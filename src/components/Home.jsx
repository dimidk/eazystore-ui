// import products from "../data/Products";
import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";
import imageBeWild from "../assets/stickers/BeWild.png";
import imageButterfly from "../assets/stickers/Butterfly.png";
import { useLoaderData, useLocation } from "react-router-dom";
import BootstrapButton from "./bootstrap/BootstrapButton";

//Hooks concept
//If use loader functions doesn't need any useState, useEffect
//and need loader in main.jsx routes and useLoaderData which reads from my
//async function loaderProducts.

export default function Home() {
  const products = useLoaderData();
  const location = useLocation();
  const username = location.state;
  const pathname = location.pathname;

  console.log(pathname);
  console.log(username);

  //update our state variable products through setProducts
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // //synchronizitation invoke external system
  // //run once when the component mounts to syncronize with external systems like db
  // //mount is when create the component and add to DOM
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await apiClient.get("/products"); // Axios GET Request
  //     setProducts(response.data);
  //     // Update products state with fetched data
  //   } catch (error) {
  //     setError(
  //       error.response?.data?.message || "Failed to get data! Try again!"
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // if (loading) {
  //   return (
  //     <div>
  //       <span>Loading products......</span>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div>
  //       <span>Error: {error}</span>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8">
      {/* <div className="container col-6">
        <BootstrapButton text="Submit" type="primary"></BootstrapButton>
        <BootstrapButton text="Save" type="secondary"></BootstrapButton>
        <BootstrapButton text="Okay" type="success"></BootstrapButton>
        <BootstrapButton text="Cancel" type="danger"></BootstrapButton>
        <BootstrapButton text="Delete" type="warning"></BootstrapButton>
        <BootstrapButton text="Link" type="link"></BootstrapButton>
      </div>
      <div className="d-grid gap-2 col-8 mx-auto">
        <div className="alert alert-primary text-center" role="alert">
          A simple primary alert message
        </div>
        <div className="alert alert-secondary text-center" role="alert">
          A simple primary alert message
        </div>
        <div className="alert alert-success text-center" role="alert">
          A simple primary alert message
        </div>
        <div className="alert alert-danger text-center" role="alert">
          A simple primary alert message
        </div>
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Warning!</strong> This is a warning alert
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>

        <div
          className="container d-flex 
        justify-content-center 
        align-items-center gap-4"
        >
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageBeWild} alt="bewild" />
            <div className="card-body">
              <h5 className="card-title">Test Card Title</h5>
              <p className="card-text">And text containing</p>
            </div>
            <a href="#" className="btn btn-primary">
              Go somewhere else
            </a>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageButterfly} alt="butterfly" />
            <div className="card-body">
              <h5 className="card-title">Test Card Title</h5>
              <p className="card-text">And text containing</p>
            </div>
            <a href="#" className="btn btn-primary">
              Go somewhere else
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-3 border p-3 bg-warning">col1</div>
          <div className="col-3 border p-3 bg-success">col2</div>
          <div
            className="col-3 border p-3 
          bg-danger text-white"
          >
            col3
          </div>
        </div>
      </div> */}

      <PageHeading title="Are you a Pet Sitter? Please Log In!!">
        <span>This is a content between tags, so this is must displayed!!</span>
        <a>Testing</a>
      </PageHeading>
      <ProductListing products={products} />
    </div>
  );
}

export async function loaderProducts() {
  try {
    const response = await apiClient.get("/products"); // Axios GET Request
    return response.data;
  } catch (error) {
    throw new Response(error.message || "Failed to get products", {
      status: error.status || 500,
    });
  }
}
