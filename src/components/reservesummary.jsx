import React from "react";
import "../styling/booking.css"; // adjust if your css path differs

const ReserveSummaryModal = ({ show, onClose, formData, selectedCar, onConfirm }) => {
  if (!show) return null;

  return (
    <>
      <div className="modal fade show" style={{ display: "block" }} role="dialog" aria-modal="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content border-0 shadow booking-modal">
            {/* Header */}
            <div className="modal-header booking-modal-header">
              <h5 className="modal-title text-white fw-bold">COMPLETE RESERVATION</h5>
              <button type="button" className="btn-close btn-close-white" onClick={onClose} />
            </div>

            {/* Body */}
            <div className="modal-body p-4">
              <div className="alert alert-secondary booking-alert mb-4">
                Review your details below. Click <b>Reserve</b> to continue on WhatsApp.
              </div>

              <div className="row g-4 align-items-stretch">
                {/* LEFT: reservation details */}
                <div className="col-lg-4">
                  <div className="booking-panel h-100">
                    <div className="booking-panel-title">Reservation Details</div>

                    <div className="booking-item">
                      <div className="booking-item-label">Vehicle Category</div>
                      <div className="booking-item-value">{formData.category || "-"}</div>
                    </div>

                    <div className="booking-item">
                      <div className="booking-item-label">Car</div>
                      <div className="booking-item-value">{selectedCar?.name || formData.carName || "-"}</div>
                    </div>

                    <div className="booking-item">
                      <div className="booking-item-label">Pick Up Location</div>
                      <div className="booking-item-value">{formData.pickupLocation || "-"}</div>
                    </div>

                    <div className="booking-item">
                      <div className="booking-item-label">Drop Off Location</div>
                      <div className="booking-item-value">{formData.dropoffLocation || "-"}</div>
                    </div>

                    <div className="booking-item">
                      <div className="booking-item-label">Pick Up Date</div>
                      <div className="booking-item-value">{formData.pickupDate || "-"}</div>
                    </div>

                    <div className="booking-item">
                      <div className="booking-item-label">Drop Off Date</div>
                      <div className="booking-item-value">{formData.dropoffDate || "-"}</div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: car summary card (image + price) */}
                <div className="col-lg-8">
                  <div className="booking-right h-100">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                      <div>
                        <div className="text-muted small">CAR:</div>
                        <h3 className="mb-1 fw-bold booking-car-title">
                          {selectedCar?.name || formData.carName || "Selected Car"}
                        </h3>

                        {selectedCar && (
                          <div className="text-muted small mt-1">
                            Fuel: <b>{selectedCar.fuel}</b> &nbsp;•&nbsp; Transmission:{" "}
                            <b>{selectedCar.transmission}</b> &nbsp;•&nbsp; Mileage:{" "}
                            <b>{selectedCar.mileage}</b>
                          </div>
                        )}
                      </div>

                      <span className="badge booking-price-badge">
                        {selectedCar?.price || "—"}
                      </span>
                    </div>

                    <div className="booking-image-wrap mt-4">
                      {selectedCar?.image ? (
                        <img
                          src={selectedCar.image}
                          alt={selectedCar.name}
                          className="img-fluid booking-car-img"
                        />
                      ) : (
                        <div className="booking-image-placeholder">
                          <div className="text-muted">Car image preview</div>
                        </div>
                      )}
                    </div>

                    <div className="booking-note mt-4">
                      After clicking reserve, WhatsApp will open with your booking details so we can continue chatting.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer px-4 py-3 booking-modal-footer">
              <button className="btn btn-light px-4" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-dark px-4" onClick={onConfirm}>
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose} />
    </>
  );
};

export default ReserveSummaryModal;
