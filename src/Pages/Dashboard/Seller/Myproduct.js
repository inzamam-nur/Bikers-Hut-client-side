import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider/AUthProvider";

const Myproduct = () => {
    const { user} = useContext(AuthContext);

  const [myProducts, setmyProducts] = useState([]);
  console.log(myProducts)
  useEffect(() => {
    axios.get(`http://localhost:5000/myproducts/${user?.email}`).then((data) => {
      console.log(data.data);
      setmyProducts(data.data);
    });
  }, []);

  //Delete My Products
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/myproducts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            toast("Wow so easy!");
            const remaining = myProducts.filter((rev) => rev._id !== id);
            setmyProducts(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-2xl text-center my-5 ">
        {" "}
        Your Products {myProducts?.length}
      </h1>

      <div className="overflow-x-auto mx-auto max-w-[80%]">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
           {
            myProducts?.map((product,index)=>{
                return<tr>
                <th>{index+1}</th>
                <td>{product.name}</td>
                <td>
                  sold
                </td>
               <td>
               {product.resale_price}
               </td>
                <td>
                    <button onClick={handleDelete} className="btn btn-error btn-outline">Delete </button>
                </td>
              </tr>
            })
           }
         
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myproduct;
