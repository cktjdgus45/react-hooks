import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './components/shoppy/App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Products from './components/shoppy/main/products/Products';
import EnrollProduct from './components/shoppy/main/admin/EnrollProduct';
import Cart from './components/shoppy/main/cart/Cart';
import ProductDetail from './components/shoppy/main/products/ProductDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'products',
    element:<Products/>
  },
  {
    path:'admin',
    element:<EnrollProduct/>
  },
  {
    path:'carts',
    element:<Cart/>
  },
  {
    path:'products/:productId',
    element:<ProductDetail/>
  }
])

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
    <App/>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);

