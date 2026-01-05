import { useEffect } from "react";
import Home from "./Home.jsx";
import Vehicles from "./Vehicles.jsx";
import About from "./About.jsx";
import Contacts from "./contact.jsx";
import Products from "./components/products.jsx";

import Cars from "./components/productspages/car.jsx";
import Suv from "./components/productspages/suv";
import Trucks from "./components/productspages/trucks";
import Vans from "./components/productspages/vans";

import { MyProvider } from "./provider/provider.jsx";
import { Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out",
    });
  }, []);
  return (
    <StyledEngineProvider injectFirst>
      <MyProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vehicles" element={<Vehicles />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contacts />} />

          <Route path="/products" element={<Products />}>
            <Route index element={<Cars />} />
            <Route path="cars" element={<Cars />} />
            <Route path="suv" element={<Suv />} />
            <Route path="trucks" element={<Trucks />} />
            <Route path="vans" element={<Vans />} />
          </Route>
        </Routes>
      </MyProvider>
    </StyledEngineProvider>
  );
}

export default App;
