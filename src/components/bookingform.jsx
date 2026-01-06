import { useMemo, useState } from "react";
import ReserveSummaryModal from "../components/reservesummary";
import "../styling/booking.css";
import { carData } from "../data/cardata.js";

const WHATSAPP_NUMBER = "2348166851222";

const BookingFlow = () => {
  const [formData, setFormData] = useState({
    category: "Car",
    carName: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    dropoffDate: "",
  });

  const [showSummary, setShowSummary] = useState(false);

  // ✅ cars that match selected category
  const filteredCars = useMemo(() => {
    return carData.filter((c) => c.category === formData.category);
  }, [formData.category]);

  // ✅ selected car (search inside filtered list)
  const selectedCar = useMemo(() => {
    return filteredCars.find((c) => c.name === formData.carName);
  }, [filteredCars, formData.carName]);

  // ✅ handle changes (reset car when category changes)
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      setFormData((prev) => ({
        ...prev,
        category: value,
        carName: "", // reset the car selection
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openSummary = () => setShowSummary(true);

  const confirmReserve = () => {
    const message = `🚗 *Car Reservation*

*Vehicle Category:* ${formData.category}
*Car:* ${selectedCar?.name || "-"}

*Price:* ${selectedCar?.price || "-"}
*Fuel:* ${selectedCar?.fuel || "-"}
*Transmission:* ${selectedCar?.transmission || "-"}
*Mileage:* ${selectedCar?.mileage || "-"}

*Pick-up Location:* ${formData.pickupLocation}
*Drop-off Location:* ${formData.dropoffLocation}
*Pick-up Date:* ${formData.pickupDate}
*Drop-off Date:* ${formData.dropoffDate}

Hello, I want to reserve. Please confirm availability and next steps.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setShowSummary(false);
  };

  return (
    <>
      <div className="container py-4">
        <div className="booking-box p-4 p-lg-5 shadow-sm rounded-4">
          <h3 className="mb-4 fw-bold">Book a car</h3>

          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label fw-semibold">Select Vehicle Category *</label>
              <select
                className="form-select"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Car">Car</option>
                <option value="SUV">SUV</option>
                <option value="Truck">Truck</option>
                <option value="Van">Van</option>
              </select>
            </div>

            {/* ✅ Car dropdown now depends on category */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Select Your Car *</label>
              <select
                className="form-select"
                name="carName"
                value={formData.carName}
                onChange={handleChange}
                disabled={filteredCars.length === 0}
              >
                <option value="">
                  {filteredCars.length ? "Select a car" : "No cars for this category"}
                </option>

                {filteredCars.map((car) => (
                  <option key={car.name} value={car.name}>
                    {car.name}
                  </option>
                ))}
              </select>

              <div className="form-text">
                {selectedCar ? `Price: ${selectedCar.price}` : "Choose a car to see price"}
              </div>
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Pick-up Location *</label>
              <input
                className="form-control"
                name="pickupLocation"
                placeholder="Select pick up location"
                value={formData.pickupLocation}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Drop-off Location *</label>
              <input
                className="form-control"
                name="dropoffLocation"
                placeholder="Select drop off location"
                value={formData.dropoffLocation}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Pick-up Date *</label>
              <input
                type="date"
                className="form-control"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Drop-off Date *</label>
              <input
                type="date"
                className="form-control"
                name="dropoffDate"
                value={formData.dropoffDate}
                onChange={handleChange}
              />
            </div>

            <div className="col-12 mt-3">
              <button
                className="btn btn-dark px-5 py-2"
                onClick={openSummary}
                disabled={!formData.carName}
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>

      <ReserveSummaryModal
        show={showSummary}
        onClose={() => setShowSummary(false)}
        formData={formData}
        selectedCar={selectedCar}
        onConfirm={confirmReserve}
      />
    </>
  );
};

export default BookingFlow;
