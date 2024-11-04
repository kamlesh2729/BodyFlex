import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Classes from "./pages/Classes";
import Price from "./pages/Price";
import Blog from "./pages/Blog";
import Schedule from "./pages/Schedule/Schedule";
import Monday from "./pages/Schedule/Monday";
import Tuesday from "./pages/Schedule/Tuesday";
import Wednesday from "./pages/Schedule/Wednesday";
import Thursday from "./pages/Schedule/Thursday";
import Friday from "./pages/Schedule/Friday";
import Saturday from "./pages/Schedule/Saturday";
import Sunday from "./pages/Schedule/Sunday";
import Gallery from "./pages/Gallery/Gallery";
import GalleryPage1 from "./pages/Gallery/GalleryPage1";
import GalleryPage2 from "./pages/Gallery/GalleryPage2";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="classes" element={<Classes />} />
      <Route path="pricing" element={<Price />} />
      <Route path="blog" element={<Blog />} />
      <Route path="about" element={<About />} />

      <Route path="schedule" element={<Schedule />}>
        <Route path="monday" element={<Monday />} />
        <Route path="tuesday" element={<Tuesday />} />
        <Route path="wednesday" element={<Wednesday />} />
        <Route path="thursday" element={<Thursday />} />
        <Route path="friday" element={<Friday />} />
        <Route path="saturday" element={<Saturday />} />
        <Route path="sunday" element={<Sunday />} />
      </Route>

      <Route path="gallery" element={<Gallery />}>
        <Route path="page-1" element={<GalleryPage1 />} />
        <Route path="page-2" element={<GalleryPage2 />} />
      </Route>
    </Routes>
  );
}

export default AllRoutes