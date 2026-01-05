import Featured from "./featured";
import "../styling/products.css";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="d-flex flex-column gap--30 px-0 px-md-0">
      <Featured />

      <div className="d-flex justify-content-center my-4">
        <div className="product-tabs">
          <NavLink
            to="/products/cars"
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            Cars
          </NavLink>

          <NavLink
            to="/products/suv"
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            SUV / MUV
          </NavLink>

          <NavLink
            to="/products/trucks"
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            Trucks
          </NavLink>

          <NavLink
            to="/products/vans"
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            Vans
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
