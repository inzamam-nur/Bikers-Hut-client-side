import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../Context/AuthProvider/AUthProvider";
import Loader from "../../../../Pages/Loader/Loader";
const AllSeller = () => {
  const { user } = useContext(AuthContext);
  const [loading, setlodaing] = useState(false);

  const [allsellers, setAllseller] = useState([]);
  console.log(allsellers);
  useEffect(() => {
    axios
      .get(`https://assignment-12-server-sdie.vercel.app/allseller?email=${user?.email}&type=seller`)
      .then((data) => {
        console.log(data.data);
        setAllseller(data.data);
        setlodaing(true);

      });
  }, []);

  //   console.log(seller);
  const deleteUser = (seller) => {
    toast(seller?.name);
    const isDelete = window.confirm(`Delete ${seller?.name}`);
    if (isDelete) {
      fetch("https://assignment-12-server-sdie.vercel.app/deleteUser?type=seller", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(seller),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast(`Deleted ${seller?.name}`);
          if (data.deletedCount > 0) {
            // alert("deleted successfully");
            toast("Wow so easy!");
            const remaining = allsellers.filter((seller) => seller.role);
            setAllseller(remaining);
          }
        });
    }
  };

  const verifySeller = (seller) => {
    fetch(`https://assignment-12-server-sdie.vercel.app/verify?email=${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(seller),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`verified ${seller?.name}`);
      });
  };

  return (
    <div className="max-w-[80%] mx-auto">
          {loading || <Loader />}
      <h1 className="text-center text-3xl  py-5"> Total Seller </h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            {allsellers?.length &&
              allsellers?.map((seller, i) => {
                return (
                  <tr>
                    <th>{i + 1}</th>
                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                    <td>
                      <button
                        onClick={() => deleteUser(seller)}
                        className="btn btn-info"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      {seller?.status === "verified" ? (
                        <h1 className="btn btn-sm btn-success"> Verified </h1>
                      ) : (
                        <h1
                          onClick={() => verifySeller(seller)}
                          className="btn btn-sm btn-info "
                        >
                          {" "}
                          Verify{" "}
                        </h1>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
