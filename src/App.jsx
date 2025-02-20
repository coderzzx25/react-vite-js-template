import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from '@/router';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback="loading...">
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
};

export default memo(App);
