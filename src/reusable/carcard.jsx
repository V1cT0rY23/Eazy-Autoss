import { FaGasPump, FaCogs, FaTachometerAlt, FaBolt } from "react-icons/fa";
import ".././styling/cars.css";

const CarCard = ({ car }) => {
  const WHATSAPP_NUMBER = "2348166851222";

  const handleReserve = () => {
    const message = `
🚗 *Car Reservation*

Car: ${car.name}
Price: ${car.price}

I am interested in reserving this car.
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="card car-card h-100 border-0">
        {/* Top badges */}
        <div className="d-flex justify-content-between align-items-center px-3 pt-3">
          <span className="badge car-type-badge">{car.name}</span>
          {car.supercharge && (
            <span className="supercharge">
              <FaBolt /> Free Supercharging
            </span>
          )}
        </div>

        {/* Image */}
        <img src={car.image} className="card-img-top p-3" alt={car.name} />

        {/* Specs */}
        <div className="card-body text-center pt-0">
          <div className="d-flex justify-content-around text-muted mb-2 specs">
            <span>
              <FaGasPump /> <br /> {car.fuel}
            </span>
            <span>
              <FaCogs /> <br /> {car.transmission}
            </span>
            <span>
              <FaTachometerAlt /> <br /> {car.mileage}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer p-0">
          <button
            className="reserve-btn w-100 rounded-0"
            onClick={handleReserve}
          >
            <span className="reserve-text">Reserve</span>
            <span className="reserve-price">{car.price}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
