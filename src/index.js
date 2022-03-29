import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  WhyUs,
  About,
  OnlineCourses,
  Backendcourse,
  Frontendcourse,
  Blog,
  Posts,
  Post,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/whyus" element={<WhyUs />} />
      <Route path="/about" element={<About />} />
      <Route path="/onlinecourses" element={<OnlineCourses />} />
      <Route path="/java-springboot-live-onlinecourses" element={<Backendcourse />} />
      <Route path="/angular-reactjs-live-onlinecourses" element={<Frontendcourse />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
