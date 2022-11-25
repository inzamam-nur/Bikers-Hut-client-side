import React from "react";
import { useLoaderData } from "react-router-dom";
import Home from "../Home/Home";

const Categories = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      {categories.map((category) => (
        <Home key={category._id} category={category}></Home>
      ))}
    </div>
  );
};

export default Categories;
