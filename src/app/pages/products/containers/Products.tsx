import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Banner, Loading } from '@app/shared/components/layouts';
import ProductItem from './ProductItem';
import SectionTitle from '@app/shared/components/partial/SectionTitle';
import { ProductServive } from '@app/shared/services';

const Products = () => {
  const productSv = new ProductServive();
  const categories = useSelector((state: any) => state.categories.data);
  const [products, setProducts] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    fetchData();
  }, [categories]);

  const fetchData = () => {
    setIsProcessing(true);
    productSv.getProductList().then(res => {
      setProducts(convertProductData(res));
      setIsProcessing(false);
    });
  };

  const convertProductData = (data) => {
    const newList = [];

    for (const item of data) {
      const newItem = {
        id: item.id,
        name: item.name,
        image: item.cover,
        oldPrice: item.sales === '0' ? 0 : item.price,
        newPrice: calcNewPrice(item.price, item.sales),
        saleOff: item.sales,
        stars: item.stars,
        type: item.type,
        typeName: getTypeName(item.type)
      };
      newList.push(newItem);
    }
    return newList;
  };

  const getTypeName = (id) => {
    if (categories) {
      for (const elem of categories) {
        if (elem.key === id) {
          return elem.name;
        }
      }
    }
  };

  const calcNewPrice = (oldPrice, sale) => {
    if (sale.includes('-')) {
      const saleNum = sale.replace(/-|%/g, '');
      if (sale.includes('%')) {
        return Math.round(oldPrice / 100 * (100 - parseInt(saleNum)));
      }
      return Math.round(oldPrice - saleNum);
    }
    return oldPrice;
  };

  return(
    <div>
      <Banner />
      <main className="main-content">
        <section className="product bg-gray-light py-5">
          <div className="container-fluid">

            <SectionTitle
              mainTitle={ 'Best selling products' }
              subTitle={ 'Best selling products Best selling products Best selling products' } />
            
            <ul className="category row">
              {
                categories && categories.map((cat, idx) => (
                  <li className="category-item col-3" key={idx}>
                    <div className="category-wrapper bg-zoom-wrapper">
                      <div className="category-inner bg-zoom-inner" style={{ backgroundImage: 'url(' + 'https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ban14_720x.jpg?v=1582511206' + ')' }}>
                        <div className="category-info">
                          <h4 className="category-title">{cat.name}</h4>
                          <a className="catefory-link">Explorer</a>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
            <Loading isShow={isProcessing} />
            <ul className="product-list row">
              {
                !isProcessing && products.length > 0 && products.map((item) => {
                  return(
                    <ProductItem key={ item.id } product={ item } />
                  )
                })
              }
              {
                !isProcessing && !products.length &&
                <p>There is no data</p>
              }
            </ul>

            <div className="text-center">
              <button className="btn btn-primary my-4">Load more</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
