import React, { Suspense } from 'react';

import CartsRoutes from './carts/CartsRoutes';
import ProductsRoutes from './products/ProductsRoutes';
import {Loading} from '@app/shared/components/layouts';

export default function PageRoutes() {
  return (
    <Suspense fallback={<Loading isShow={true} />}>
      <CartsRoutes />
      <ProductsRoutes />
    </Suspense>
  )
}
