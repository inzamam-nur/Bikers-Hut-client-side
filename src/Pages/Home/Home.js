import React from "react";
import Categories from "../Categories/Categories";
import Banner from "./Banner/Banner";
import Side from "./Side section/Side";

const Home = () => {

  return (
    <div>
      <Banner></Banner>

    <Categories></Categories>
      <Side></Side>
    </div>
    
  );
};

export default Home;
