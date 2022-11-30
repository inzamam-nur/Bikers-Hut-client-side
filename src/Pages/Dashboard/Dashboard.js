import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AUthProvider";
import useRoleCheck from "../../hooks/useRoleCheck";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [roleCheck] = useRoleCheck(user.email);

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
            <li>
              <Link to="/categoriesadd"> Categories </Link>
              <Link to="/addproduct"> Add Products</Link>
              <Link to="/myproducts"> My Products </Link>
              <Link to="/myorders"> My Orders </Link>
              <Link to="/allsellers"> All Seller </Link>
              <Link to="/allbuyers"> All Buyer </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
