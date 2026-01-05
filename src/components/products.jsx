import { useState } from "react";
import Featured from "./featured";
import "../styling/products.css";

import Cars from "./productspages/car";
import Suv from "./productspages/suv";
import Trucks from "./productspages/trucks";
import Vans from "./productspages/vans";

const Products = () => {
  const [activeTab, setActiveTab] = useState("cars");

  // Render content based on active tab
  const renderTab = () => {
    switch (activeTab) {
      case "cars":
        return <Cars />;
      case "suv":
        return <Suv />;
      case "trucks":
        return <Trucks />;
      case "vans":
        return <Vans />;
      default:
        return <Cars />;
    }
  };

  return (
    <section className="products-page">
      <div className="container-fluid px-0">
        <Featured />
      </div>

      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <ul className="nav nav-pills justify-content-center gap-2 product-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "cars" ? "active" : ""}`}
                  onClick={() => setActiveTab("cars")}
                >
                  Cars
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "suv" ? "active" : ""}`}
                  onClick={() => setActiveTab("suv")}
                >
                  SUV / MUV
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "trucks" ? "active" : ""}`}
                  onClick={() => setActiveTab("trucks")}
                >
                  Trucks
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "vans" ? "active" : ""}`}
                  onClick={() => setActiveTab("vans")}
                >
                  Vans
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Products Content */}
      <div className="container pb-5">{renderTab()}</div>
    </section>
  );
};

export default Products;
