import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './components/shoppy/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/shoppy/main/products/Products';
import EnrollProduct from './components/shoppy/main/admin/EnrollProduct';
import Cart from './components/shoppy/main/cart/Cart';
import ProductDetail from './components/shoppy/main/products/ProductDetail';
import Home from './components/shoppy/main/home/Home';
import app from './components/shoppy/service/firebase/firebase.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'admin',
        element: <EnrollProduct />
      },
      {
        path: 'carts',
        element: <Cart />
      },
      {
        path: 'products/:productId',
        element: <ProductDetail />
      }
    ]
  },
])

const firebaseApp = app;

root.render(
  <QueryClientProvider client={queryClient}>
    <div className='w-[80rem] h-screen'>
      <RouterProvider router={router}></RouterProvider>
    </div>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);

