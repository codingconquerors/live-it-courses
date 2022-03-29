import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="text-center">
      <a
        href="https://www.youtube.com/channel/UCdjb1vWE36-YQyXo6FOlYTw"
        className="youtube social" target="_blank" rel="noreferrer" 
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/Best-Online-Courses-in-Computer-Science-and-Technology-110162584978690/"
        className="facebook social" target="_blank" rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/liveitcourses" className="twitter social"  target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/liveitcourses/"
        className="instagram social" target="_blank" rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <div className="short_text">
        Copyright &copy; 2022 Coding Conquerors, Inc.
      </div>
    </div>
  );
}
