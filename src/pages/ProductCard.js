import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { Getproducts } from "../features/getallProduct";
import { BASE_URL } from "../utils/BaseUrl";

export default function ProductCard() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state?.allproduct.allproductData);
  const checkLoading = useSelector((state) => state?.allproduct.isFetching);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    dispatch(Getproducts());
  }, []);

  const override = {
    display: "block",
    margin: "10% auto",
    borderColor: "white",
  };

  return (
    <div className="py-4  main">
      <MDBContainer>
        {checkLoading ? (
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <MDBRow className="mb-3">
            {items.map((item) => (
              <MDBCol key={item.id} size="md  mb-3">
                <MDBCard className="product-card">
                  <MDBCardImage
                    src={`${BASE_URL}/upload/${item.img}`}
                    position="top"
                    alt="product-cards"
                  />

                  <MDBCardBody className="d-flex flex-column  justify-content-end">
                    <MDBCardTitle className="text-success">
                      Name : {item.title}
                    </MDBCardTitle>
                    <MDBCardText className="fw-bold">
                      Rs : {item.price}
                    </MDBCardText>
                    <MDBBtn onClick={() => dispatch(addToCart(item))}>
                      Add to Cart
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        )}
      </MDBContainer>
    </div>
  );
}
