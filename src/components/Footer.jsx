import React from "react";
import SocialFollow from "./SocialFollow"
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <footer className="py-2 bg-success p-2 style=--mdb-bg-opacity: 0.5; fixed-bottom">
          <div className="container">
          <SocialFollow />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
