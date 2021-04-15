import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { convertDiscountPipe } from '@app/shared/helpers/pipes/discount-pipe';
import { addToCart } from '../../carts/carts.actions';

const ProductItem = ({ product } : any) => {
  
  const cart = useSelector((state: any) => state.cart.data);
  const dispatch = useDispatch();

  const addCart = () => {
    product.quantity = 1;
    dispatch(addToCart(product));
  };

  const checkExist = () => {
    const index = cart.findIndex(item => item.id === product.id);
    return index !== -1;
  };

  return(
    <li className="product-item col-3 mb-5">
      <div className="product-item-inner">
        <div className="bg-zoom-wrapper">
          <div className="product-item-img bg-zoom-inner" style={{ backgroundImage: 'url(' + product.image + ')' }}></div>
          <div className="product-item-actions">
            <button className="btn btn-has-icon btn-favorite txt-xl mb-5">
              <span className="icon-heart"></span>
            </button>
            <div className="other-actions d-flex flex-column align-items-center pt-6">
              <button className="btn btn-primary mb-2">
                <span className="icon-eye"></span>
              </button>
              <button className="btn btn-primary" disabled={checkExist()} onClick={addCart}>
                <span className="icon-cart"></span>
              </button>
            </div>
          </div>
          {
            product.saleOff != 0 &&
            <span className="badge badge-danger">{ convertDiscountPipe(product.saleOff) }</span>
          }
        </div>
        <div className="product-item-info mt-4 text-center">
          <h5 className="product-item-type text-capitalize txt-md mb-2">{ product.typeName }</h5>
          <h5 className="product-item-name text-capitalize txt-lg mb-2">{ product.name }</h5>
          <p className="product-item-price txt-md">
            {
              product.oldPrice != 0 &&
              <span className="old-price mr-2 txt-line-through txt-secondary">{ product.oldPrice }$</span>
            }
            <span className="new-price">{ product.newPrice }$</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
