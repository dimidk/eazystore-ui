// import products from "../data/Products";
import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";

//Hooks concept

export default function Home() {
  //update our state variable products through setProducts
  const [products, setProducts] = useState([]);
  const [loading,setLoading] =useState(true);
  const [error,setError] = useState(null);


  //synchronizitation invoke external system
  //run once when the component mounts to syncronize with external systems like db
  //mount is when create the component and add to DOM
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
    setLoading(true);
    const response = await apiClient.get("/products"); // Axios GET Request
    setProducts(response.data);
    // Update products state with fetched data
    } catch(error) {
      setError(
        error.response?.data?.message ||
        "Failed to get data! Try again!"
      );
    } finally {
      setLoading(false);
    }
    
  };

  if (loading) {
    return(
    <div>
      <span>Loading products......</span>
    </div>
    );
  }

  if (error) {
    return(
      <div>
        <span>Error: {error}</span>
      </div>
    );
  }

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
