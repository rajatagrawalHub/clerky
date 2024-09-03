import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Login';

// Browser Router for Navigation -- For react-router-dom
const router = createBrowserRouter([
  // Main Page Nav
  {
    path: "/",
    element: <App />
  },
  // Login Page Nav
  {
    path: "/login",
    element: <Login />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
