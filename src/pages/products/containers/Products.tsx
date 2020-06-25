import React from 'react';

import Header from '../../../shared/components/layouts/Header';
import Footer from '../../../shared/components/layouts/Footer';
import ProductItem from './ProductItem';
import SectionTitle from '../../../shared/components/partial/SectionTitle';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Item 1',
      image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
      oldPrice: 250,
      newPrice: 150,
      saleOff: 29
    },
    {
      id: 2,
      name: 'Item 3',
      image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
      oldPrice: 250,
      newPrice: 150,
      saleOff: 29
    },
    {
      id: 3,
      name: 'Item 3',
      image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
      oldPrice: 250,
      newPrice: 150,
      saleOff: 29
    },
    {
      id: 4,
      name: 'Item 4',
      image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
      oldPrice: 250,
      newPrice: 150,
      saleOff: 29
    },
    {
      id: 5,
      name: 'Item 5',
      image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
      oldPrice: 250,
      newPrice: 150,
      saleOff: 29
    },
    {
      id: 6,
      name: 'Item 6',
      image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
      oldPrice: 250,
      newPrice: 150,
      saleOff: 29
    },
    {
      id: 7,
      name: 'Item 7',
      image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
      oldPrice: 250,
      newPrice: 150,
      saleOff: 29
    },
    {
      id: 8,
      name: 'Item 8',
      image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
      oldPrice: 250,
      newPrice: 150,
      saleOff: 29
    }
  ];
  return(
    <div>
      <Header />
      <main className="main-content">
        <section className="product bg-gray-light py-5">
          <div className="container-fluid">

            <SectionTitle
              mainTitle={ 'Best selling products' }
              subTitle={ 'Best selling products Best selling products Best selling products' } />

            <ul className="product-list row">
              {
                products && products.map((item) => {
                  return(
                    <ProductItem key={ item.id } product={ item } />
                  )
                })
              }
            </ul>

            <div className="text-center">
              <button className="btn btn-primary my-4">Load more</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Products;
