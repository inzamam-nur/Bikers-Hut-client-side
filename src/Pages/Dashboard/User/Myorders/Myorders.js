import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AUthProvider";
import Loader from "../../../Loader/Loader";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/myorders/${user?.email}`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((data) => {
        console.log(data.data);
        setOrders(data.data);
        setLoading(true);
      });
  }, [user?.email]);

  console.log(orders);

  return (
    <div>
      <h1 className="text-center text-3xl my-3 ">
        {" "}
        Your Orders {orders.length}
      </h1>
      {loading || <Loader />}
      <div className="overflow-x-auto mx-auto max-w-[80%]">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Product name</th>
              <th>Location</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{order.name}</td>
                  <td>{order.product}</td>
                  <td>{order.location}</td>
                  <td>{order.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
