import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styling/featured.css"; 

const cars = [
  {
    name: "Marcedes-Benz-CL5",
    title: "S-Class Grandeur",
    price: "85,000$",
    year: "2023",
    model: "S-Class",
    mileage: "12,000 miles",
    vin: "MBC123XYZ789456",
    image: "/f1_car.jpg", 
  },
  {
    name: "BMW M4",
    title: "Gran Turismo M4",
    price: "54,000$",
    year: "2023",
    model: "Turismo M4",
    mileage: "9,000 miles",
    vin: "NMT123JKZ767944",
    image: "f2_car.jpg",
  },
  {
    name: "Audi A1",
    title: "A1 Hatchback",
    price: "25,400$",
    year: "2023",
    model: "A1 Hatchback",
    mileage: "10,000 miles",
    vin: "HKL623DFG735667",
    image: "f2_car.jpg",
  },
];

const Featured = () => {
  return (
    <div className="featured-wrapper py-5">
      <Container>
        <div className="text-center mb-4">
          <h2 className="section-title">FEATURED CARS</h2>
          <div className="decorative-divider my-2">
            <div className="line" />
            <div className="diamond" />
            <div className="line" />
          </div>
          <p className="subtitle">“Eazy-Autos Special Picks for Seamless City Driving.”</p>
        </div>

        <Row className="g-4">
          {cars.map((car, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <Card className="car-card h-100 text-center shadow-sm">
                <Card.Img variant="top" src={car.image} className="img-fluid px-3 pt-3" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mb-1">{car.name}</Card.Title>
                  <h6 className="text-muted">{car.title} <span className="float-end price">{car.price}</span></h6>
                  <hr />
                  <ul className="text-start ps-3 small">
                    <li><strong>Year:</strong> {car.year}</li>
                    <li><strong>Model:</strong> {car.model}</li>
                    <li><strong>Mileage:</strong> {car.mileage}</li>
                    <li><strong>VIN:</strong> {car.vin}</li>
                  </ul>
                  <div className="mt-auto">
                    <Button variant="outline-dark" className="rounded-pill px-4 explore-btn">
                      EXPLORE PRODUCT
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Featured;
