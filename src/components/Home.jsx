// import products from "../data/Products";
import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";

//Hooks concept

export default function Home() {
  //update our state variable products through setProducts
  const [products, setProducts] = useState([]);

  //synchronizitation invoke external system
  //run once when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await apiClient.get("/products"); // Axios GET Request
    setProducts(response.data);
    // Update products state with fetched data

    console.log(response.data);
  };

  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8">
      <PageHeading title="Are you a Pet Sitter? Please Log In!!">
        <span>This is a content between tags, so this is must displayed!!</span>
        <a>Testing</a>
      </PageHeading>
      <ProductListing products={products} />
    </div>
  );
}
