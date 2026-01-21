// import products from "../data/Products";
import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

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
      <button className="btn btn-primary">test</button>
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
