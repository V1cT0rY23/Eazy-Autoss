import { Link } from "react-router-dom"
import "../styling/frontpage.css"

const FrontPage = () => {
    return ( 
      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center">
      <div className="overlay-text px-3  px-md-1">
        <h1 className="display-5 display-md-4 fw-bold">
          Exquisite Rides, Exceptional Deals, Elevate Your Drive
        </h1>
        <p className="mt-3 lead">
          Discover a curated selection of premium vehicles designed for those who demand the best.
        </p>
      </div>
    </div>
     );
}
 
export default FrontPage;