import React from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import DropdownBox from "./DropdownBox";
import { useState, useMemo } from "react";

const sortList = ["Popularity", "Price High to Low", "Price Low to High"];

export default function ProductListing({ products }) {

  //react hook useState. instead of using = to assign a value and create
  //a function to keep the past value and add the new, with this hook
  // use the name of the var and a set<name> function which gets the new value and keep
  // the old
  const [searchText, setSearchText] = useState("");
  const [selectedSort, setSelectedSort] = useState("Popularity");

  const filteredAndSortProducts = useMemo(() => {
    if (!Array.isArray(products)) {
      return [];
    }
    let filteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase()) ||
          product.description.toLowerCase().includes(searchText.toLowerCase())
      );

      return filteredProducts.slice().sort( (a,b) => {
        switch (selectedSort) {
          case "Price High to Low":
            return parseFloat(b.price) - parseFloat(a.price);
          case "Price Low to High":
            return parseFloat(a.price) - parseFloat(b.price);
          case "Popularity":
            default:
              return parseInt(b.popularity) - parseInt(a.popularity);
        }  
      });

  },[products,searchText,selectedSort])

  //with this function i can pass value from child to parent when an event is
  //triggered in child.
  function handleSearchChange(inputSearch) {
    setSearchText(inputSearch);
    console.log(searchText);
  }

  function handleSortChange(typeSort) {
    setSelectedSort(typeSort);
  }

  //if I add {} to function must have a return statement to all this
  // let filteredAndSortProducts = Array.isArray(products)
  //   ? products.filter(
  //       (product) =>
  //         product.name.toLowerCase().includes(searchText.toLowerCase()) ||
  //         product.description.toLowerCase().includes(searchText.toLowerCase())
  //     )
  //   : [];
  // switch (selectedSort) {
  //   case "Price High to Low":
  //     filteredAndSortProducts.sort(
  //       (a, b) => parseFloat(b.price) - parseFloat(a.price)
  //     );
  //     break;
  //   case "Price Low to High":
  //     filteredAndSortProducts.sort(
  //       (a, b) => parseFloat(a.price) - parseFloat(b.price)
  //     );
  //     break;
  //   case "Popularity":
  //   default:
  //     filteredAndSortProducts.sort(
  //       (a, b) => parseInt(b.popularity) - parseInt(a.popularity)
  //     );
  //     break;
  // }

  return (
    <div className="max-w-[1152px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search"
          placeholder="search products...."
          value={searchText}
          handleSearch={(value) => handleSearchChange(value)}
        />
        <DropdownBox
          label="Sort by"
          handleSort={(value) => handleSortChange(value)}
          options={sortList}
          selectedValue={selectedSort}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
        {filteredAndSortProducts.length > 0 ? (
          filteredAndSortProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
            // <ProductCard product={product} />
          ))
        ) : (
          <p className="text-center font-primary font-bold text-lg text-primary">
            No products found!
          </p>
        )}
      </div>
    </div>
  );
}
