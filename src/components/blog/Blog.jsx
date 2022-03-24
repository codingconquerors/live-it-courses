import React from "react";
import { Outlet } from "react-router-dom";

function Blog() {
  return (
    <div className="home">
      <div className="container">
        <h1 className="text-center mt-5">Online IT Courses Based on live classes</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Blog;
