import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AboutUs from "../pages/AboutUs.jsx";

import Layout from "../layout/Layout";
import HomePage from "../pages/Home.jsx";
import Videos from "../pages/Videos.jsx";
import Gallery from "../pages/Gallery.jsx";
import ContactUs from "../pages/ContactUs.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/gallery" element={<Gallery />} />

      <Route path="/contact" element={<ContactUs />} />
    </Route>
  )
);
