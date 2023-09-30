// Importing items to allow routes to work properly.
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import App from './App';
import Landing from './components/Landing/Landing.jsx';
import Gallery from './components/gallery/gallery.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/photos',
        element: <Gallery />,
      },
 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
