import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbarMainDiv">
      <Link to="/" className="linktag">
        Home
      </Link>
      <Link to="/food" className="linktag">
        Foods
      </Link>
      <Link to="/cart" className="linktag">
        Cart
      </Link>
      <Link to="/contact" className="linktag">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
