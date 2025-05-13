import { Link } from "react-router-dom"

const FrontPage = () => {
    return ( 
<div className="front position-relative w-100">
      <img
        className="back w-100 position-absolute top-0 start-0"
        src="back_n.png"
        alt=""
      />

      <div
        className="position-relative z-1 py-5 px-3 px-sm-5"
        style={{ marginTop: 65 }}
      >
        <div className="row align-items-center w-100">
          {/* Text + Buttons */}
          <div className="col-md-6 front-child1 text-center text-md-start mb-4 mb-md-0">
            <h1 style={{ fontSize: "2.5rem", fontWeight: "600" }}>
              If comparable, It is no longer
              <span className="nova" style={{ fontSize: "2.7rem" }}> NOVA</span>
            </h1>

            {/* Mobile car image */}
            <div className="d-block d-md-none my-3">
              <img
                className="car car1 img-fluid"
                src="rc1.jpg"
                alt="Car"
                style={{ maxWidth: "100%", height: "auto", mixBlendMode:"multiply" }}
              />
            </div>

            {/* Buttons side by side on all screen sizes */}
            <div className="d-flex flex-row gap-3 mt-4 justify-content-center justify-content-md-start">
              <a href="#booking" className="btn btn-dark px-5 py-3 fs-5">
                Order
              </a>
              <Link to="/vehicles" className="btn btn-outline-dark px-5 py-3 fs-5">
                Cars
              </Link>
            </div>
          </div>

          {/* Desktop car image */}
          <div className="col-md-6 front-child2 text-center d-none d-md-block">
            <img
              className="car car1 img-fluid"
              src="rc1.jpg"
              alt="Car"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default FrontPage;