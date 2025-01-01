import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';

// Define routes 
const router = createBrowserRouter( 
  createRoutesFromElements (
    <Route path="/" element= {<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />`
      <Route path="/product/:id" element={<ProductScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);