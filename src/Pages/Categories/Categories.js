import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const [loading, setlodaing] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/categories`).then((data) => {
      //   console.log(data.data);
      setCategories(data.data);
      setlodaing(true);
    });
  }, []);

  return (
    <div className="my-5">
      {loading || <Loader />}
      <div className="grid grid-cols-3 gap-4 mt-5 mb-5">
        {categories.map((c) => (
          <div key={c?._id}>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={c?.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{c?.name}</h2>
                  <div className="card-actions">
                  <Link to={`/products/${c.category_id}`}>
                    <button className="btn btn-primary">Book Now</button>
                  </Link>                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
