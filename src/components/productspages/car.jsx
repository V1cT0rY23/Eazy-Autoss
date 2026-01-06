import CarCard from "../../reusable/carcard";

const carData = [
  {
    name: "Jaguar F-TYPE",
    image: "/cars/jaguar.png",
    fuel: "Gasoline",
    transmission: "Manual",
    mileage: "2.5ft / 100km",
    supercharge: true,
    price: "N1,000,000",
  },
  {
    name: "Ferrari F430",
    image: "/cars/ferrari.png",
    fuel: "Diesel",
    transmission: "Auto",
    mileage: "5.5ft / 100km",
    supercharge: true,
    price: "N1,000,000",
  },
  {
    name: "Tesla Model S",
    image: "/cars/tesla-s.png",
    fuel: "Gasoline",
    transmission: "Manual",
    mileage: "5ft / 100km",
    supercharge: true,
    price: "N1,000,000",
  },
  {
    name: "Hyundai Elite",
    image: "/cars/hyundai.png",
    fuel: "Gasoline",
    transmission: "Auto",
    mileage: "8ft / 100km",
    supercharge: true,
    price: "N1,000,000",
  },
  {
    name: "Hyundai Elite",
    image: "/cars/hyundai.png",
    fuel: "Gasoline",
    transmission: "Auto",
    mileage: "8ft / 100km",
    supercharge: true,
    price: "N1,000,000",
  },
  {
    name: "Hyundai Elite",
    image: "/cars/hyundai.png",
    fuel: "Gasoline",
    transmission: "Auto",
    mileage: "8ft / 100km",
    supercharge: true,
    price: "N1,000,000",
  },
  {
    name: "Hyundai Elite",
    image: "/cars/hyundai.png",
    fuel: "Gasoline",
    transmission: "Auto",
    mileage: "8ft / 100km",
    supercharge: true,
    price: "N1,000,000",
  },
  {
    name: "Hyundai Elite",
    image: "/cars/hyundai.png",
    fuel: "Gasoline",
    transmission: "Auto",
    mileage: "8ft / 100km",
    supercharge: true,
    price: "N1,000,000",
  },
];

const Cars = () => {
  return (
    <div className="container">
      <div className="row">
        {carData.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
