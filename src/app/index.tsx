import React, { Suspense } from 'react';
import createSagaMiddleware from 'redux-saga';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import AppRoutes from '@app/AppRoutes';
import reducer from '@app/stores/reducer';
import saga from '@app/stores/saga';
import '@app/shared/helpers/i18n/i18n.helper';

import { Header, Footer, Loading } from '@app/shared/components/layouts';

const middleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(middleware, logger),
);

middleware.run(saga);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Suspense fallback={<Loading isShow={true} />}>
        <AppRoutes/>
      </Suspense>
      <Footer />
    </Router>
  </Provider>,
  document.getElementById('root')
);
