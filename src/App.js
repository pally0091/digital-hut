
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './Components/Main';
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import About from './Components/About/About'
import Login from './Components/User/Login'
import Register from './Components/User/Register'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
