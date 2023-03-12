import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer className="nav-bar-top">
        <MDBNavbarBrand>
          <Link to="/">
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/93/87/initial-letter-sk-restaurant-logo-template-vector-43909387.jpg"
              alt="logo"
              className="logo"
            />
          </Link>
        </MDBNavbarBrand>
        <span>
          <Link to="/">All Product </Link>
        </span>

        <Link to="/cart">
          <i className="fas fa-utensils position-relative">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-danger">
              {totalQuantity}
            </span>
          </i>
        </Link>
      </MDBContainer>
    </MDBNavbar>
  );
}
