import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Side from "./Side section/Side";

const Home = () => {
  const Categories = useLoaderData();
  console.log(Categories);
  return (
    <div>
      <Banner></Banner>

      <div className="grid grid-cols-3 gap-4 mt-5 mb-5">
        {Categories.map((c) => (
          <div key={c._id}>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={c.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{c.name}</h2>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Side></Side>
    </div>
    
  );
};

export default Home;
