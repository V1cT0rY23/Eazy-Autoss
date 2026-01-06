import { useState } from "react";

const BookingForm = ({ selectedCar }) => {
  const WHATSAPP_NUMBER = "2348166851222";

  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    pickupDate: "",
    dropoffDate: "",
  });

  const handleSubmit = () => {
    const message = `
🚗 *New Booking Request*

Car: ${selectedCar.name}
Price: ${selectedCar.price}

📍 Pick-up: ${form.pickup}
📍 Drop-off: ${form.dropoff}

📅 Pick-up Date: ${form.pickupDate}
📅 Drop-off Date: ${form.dropoffDate}
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="booking-box">
      <input
        placeholder="Pick-up location"
        onChange={(e) => setForm({ ...form, pickup: e.target.value })}
      />

      <input
        placeholder="Drop-off location"
        onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
      />

      <input
        type="date"
        onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
      />

      <input
        type="date"
        onChange={(e) => setForm({ ...form, dropoffDate: e.target.value })}
      />

      <button onClick={handleSubmit}>Search / Reserve</button>
    </div>
  );
};

export default BookingForm;
