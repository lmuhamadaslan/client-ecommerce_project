import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: '/products',
        element: <ProductList />,
      },
      {
        path: '/products/:category',
        element: <ProductList />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
