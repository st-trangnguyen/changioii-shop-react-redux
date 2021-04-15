import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export const Header = () => {
  const cart = useSelector((state: any) => state.cart);
  const [quanlity, setQuanlity] = useState(0);

  function getCartLength() {
    let sum = 0;
    if (cart.data && cart.data.length) {
      for (const element of cart.data) {
        sum = sum + element.quantity;
      }
    }
    setQuanlity(sum);
  }

  useEffect(() => {
    getCartLength()
  }, [cart]);

  return(
    <header className="header py-3 header-fixed">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div></div>
        <Link to="/" className="logo">Hello world</Link>
        <ul className="user-action d-flex justify-content-between">
          <li className="user-action-item">
            <button className="btn btn-has-icon btn-user-action">
              <span className="icon-search"></span>
            </button>
          </li>
          <li className="user-action-item">
            <button className="btn btn-has-icon btn-user-action">
              <span className="icon-user"></span>
            </button>
          </li>
          <li className="user-action-item">
            <Link className="btn btn-has-icon btn-user-action" to="/carts">
              <span className="icon-cart"></span>
              <span className="quanlity">{quanlity}</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
