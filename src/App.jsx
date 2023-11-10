import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from 'react-router-dom';
import About from './pages/About';
import Layout from './Layout';
import Home from './pages/Home';
import Vans, { loader } from './pages/Vans';
import VanDetailPage, {
  loader as VanDetailPageLoader,
} from './pages/VanDetailPage';
import HostPage from './pages/HostPage';
import Dashboard from './components/Dashboard';
import Income from './components/Income';
import Reviews from './components/Reviews';
import HostVans from './components/HostVans';
import HostVansDetail from './pages/HostVansDetail';
import Details from './components/Details';
import Pricing from './components/Pricing';
import Photos from './components/Photos';
import NotFoundPage from './components/404Page';
import Login from './pages/Login';

import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />

      <Route path="vans">
        <Route index element={<Vans />} loader={loader} />
        <Route
          path=":id"
          loader={VanDetailPageLoader}
          element={<VanDetailPage />}
        />
      </Route>

      <Route path="host" element={<HostPage />}>
        <Route
          loader={async () => {
            return null;
          }}
          index
          element={<Dashboard />}
        />
        <Route
          loader={async () => {
            return null;
          }}
          path="income"
          element={<Income />}
        />

        <Route path="vans">
          <Route
            loader={async () => {
              return null;
            }}
            index
            element={<HostVans />}
          />
          <Route
            loader={async () => {
              return null;
            }}
            path=":id"
            element={<HostVansDetail />}
          >
            <Route
              loader={async () => {
                return null;
              }}
              index
              element={<Details />}
            />
            <Route
              loader={async () => {
                return null;
              }}
              path="pricing"
              element={<Pricing />}
            />
            <Route
              loader={async () => {
                return null;
              }}
              path="photos"
              element={<Photos />}
            />
          </Route>
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
