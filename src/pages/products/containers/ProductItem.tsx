import React from 'react';

const ProductItem = ({ product } : any) => {
  console.log(product);
  return(
    <li className="product-item col-3 mb-5">
      <div className="bg-zoom-wrapper">
        <div className="product-item-img bg-zoom-inner" style={{ backgroundImage: 'url(' + product.image + ')' }}></div>
        <div className="product-item-actions">
          <button className="btn btn-has-icon btn-favorite txt-xl mb-5">
            <span className="icon-heart"></span>
          </button>
          <div className="other-actions d-flex flex-column align-items-center">
            <button className="btn btn-primary mb-2">
              <span className="icon-eye"></span>
            </button>
            <button className="btn btn-primary">
              <span className="icon-cart"></span>
            </button>
          </div>
        </div>
        <span className="badge badge-danger">{ product.saleOff }%</span>
      </div>
      <div className="product-item-info mt-4 text-center">
        <h5 className="product-item-name text-capitalize txt-xl mb-2">{ product.name }</h5>
        <p className="product-item-price txt-lg txt-secondary">
          <span className="old-price mr-2 txt-line-through">{ product.oldPrice }$</span>
          <span className="new-price">{ product.newPrice }$</span>
        </p>
      </div>
    </li>
  )
};

export default ProductItem;
