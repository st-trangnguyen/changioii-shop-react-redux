import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart, deleteFromCart } from '../carts.actions';

const Carts = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.data);

  function getItemTotalPrice(item) {
    const total = Number(item.newPrice) * Number(item.quantity);
    return total.toFixed(2);
  }

  function handleUpdateQuantity(item, inscrease = true) {
    if (!inscrease && item.quantity === 1) {
      return;
    }
    item.quantity = inscrease ? item.quantity + 1 : item.quantity - 1;
    dispatch(addToCart(item));
  }

  function handleRemoveItem(item) {
    dispatch(deleteFromCart(item));
  }

  return (
    <div className="cart-page">
      <section className="banner">
        <h2 className="title">Shopping Cart</h2>
      </section>

      <div className="container-fluid">
        <section className="cart-table">
          <div className="cart-header">
            <div className="row">
              <div className="col-4">Product</div>
              <div className="col-2">Price</div>
              <div className="col-3 text-center">Quantity</div>
              <div className="col-2 text-center">Total</div>
              <div className="col-2 text-right"></div>
            </div>
          </div>
          <ul className="cart-list">
            {
              cart.length > 0 && cart.map((item, idx) => (
                <li className="cart-item" key={idx}>
                  <div className="row d-flex align-items-center">
                    <div className="col-4">
                      <div className="d-flex align-items-center">
                        <a className="product-image" href="">
                          <img src={item.image} alt="product-img"/>
                        </a>
                        <a className="product-title" href="">
                          {item.name}
                        </a>
                      </div>
                    </div>
                    <div className="col-2">${item.newPrice}</div>
                    <div className="col-3">
                      <div className="quantity-btn">
                        <button className="btn-minus" onClick={() => handleUpdateQuantity(item, false)}>-</button>
                        <span className="count">{item.quantity}</span>
                        <button className="btn-plus" onClick={() => handleUpdateQuantity(item)}>+</button>
                      </div>
                    </div>
                    <div className="col-2 text-center">${getItemTotalPrice(item)}</div>
                    <div className="col-1 text-right">
                      <button className="btn btn-has-icon" onClick={() => handleRemoveItem(item)}>
                        <span className="icon-trash"></span>
                      </button>
                    </div>
                  </div>
                </li>
              ))
            }
            {
              !cart.length &&
              <p className="text-center my-5">Empty cart</p>
            }
          </ul>
        </section>
      </div>
    </div>
  )
};

export default Carts;
