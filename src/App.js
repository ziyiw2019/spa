import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails'
import AboutUs from './pages/AboutUs'
import Work from './pages/Work'
import Rent from './pages/Rent'
import Hire from './pages/Hire'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/room/:id',
    element: <RoomDetails/>
  },
  {
    path: '/aboutus',
    element: <AboutUs/>
  }
  ,
  {
    path: '/work',
    element: <Work/>
  }
  ,
  {
    path: '/rent',
    element: <Rent/>
  }
  ,
  {
    path: '/hire',
    element: <Hire/>
  }
]);


const App = () => {
  return (
  <div>

    <RouterProvider router={router}/>
    <Footer/>
  
  </div>
  )
  
};

export default App;
