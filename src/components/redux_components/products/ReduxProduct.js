import React, { useEffect, useState } from "react";
import axios from "axios";
import Productitem from "./productitem";
import { baseUrl } from "../../../global/base";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartModal from "./cartModal";

import { cartActions } from "./store/cart_slice";

import { UseSelector, useDispatch } from "react-redux";

function ReduxProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setModalLoading] = useState(false);
  const [prdloding, setProductsLoad] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setModalLoading(true);
  };

  const dispatchActions = useDispatch();

  useEffect(() => {
    let productApi = axios.get(`${baseUrl}product/`);
    let cartApi = axios.get(`${baseUrl}cart/`);

    axios
      .all([productApi, cartApi])
      .then(
        axios.spread((prdRes, cartRes) => {
          setProducts(prdRes?.data);
          dispatchActions(cartActions.udt_cart_items(cartRes?.data));
          setProductsLoad(false)
        })
      )
      .catch((err) => {});
  }, []);

  const AddToCart = (PrdDetails) => {
    handleShow();

    axios
      .post(`${baseUrl}cart/`, { ...PrdDetails, qty: 1 })
      .then((res) => {
        // console.log(res);
        // dispatchActions(cartActions.udt_cart_items(cartRes?.data));
        dispatchActions(cartActions.IncrementQty(res?.data));
        setModalLoading(false);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <CartModal loading={loading} show={show} handleClose={handleClose} />
      <Container>
        <Row>
          {prdloding ? (
            "Products are Loading"
          ) : products?.length > 0 ? (
            products?.map((e, index) => (
              <Col key={index}>
                <Productitem data={e} AddToCart={AddToCart} />
              </Col>
            ))
          ) : (
            <>No Products</>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ReduxProduct;
