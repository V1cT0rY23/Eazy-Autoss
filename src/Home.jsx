import Header from "./header";
import FrontPage from "./components/frontpage";
import Products from "./components/products";
import BookingForm from "./components/bookingform";
import "./styling/home.css"


const Home = () => {
  return (
    <div className="d-flex flex-column gap--30 px-0 px-md-0">
      <Header />
      <FrontPage />
      <Products />
      <BookingForm />
    </div>
  );
};

export default Home;
