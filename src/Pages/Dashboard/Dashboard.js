import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AUthProvider";
import useRoleCheck from "../../hooks/useRoleCheck";

const Dashbord = () => {
  const { user } = useContext(AuthContext);
  const [roleCheck] = useRoleCheck(user?.email);
  console.log(roleCheck);
  const ItemDash = (
    <React.Fragment>
      {roleCheck === "seller" && (
        <>
          <Link to="/addproduct"> Add Products</Link>
          <Link to="/myproducts"> My Products </Link>
          <Link to="/myorders"> My Orders </Link>
        </>
      )}
      {roleCheck === "buyer" && (
        <>
          <Link to="/myorders"> My Orders </Link>
        </>
      )}
      {roleCheck === "admin" && (
        <>
          <Link to="/allsellers"> All Sellers </Link>
          <Link to="/allbuyers"> All Buyers </Link>
        </>
      )}
    </React.Fragment>
  );

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>{ItemDash}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
