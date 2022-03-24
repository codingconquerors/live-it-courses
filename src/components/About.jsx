import React from "react";
import { Helmet } from "react-helmet";
function About() {
  return (
    <div className="about">
      <Helmet>
        <title>About - liveitcourses.com</title>
        <meta name="description" content="Live online classes" />
      </Helmet>
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-xs-5 col-sm-6 col-lg-4">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/assets/images/conquer-the-world-of-coding.png"
              alt=""
            />
          </div>
          <div className="col-xs-7 col-sm-6 col-lg-8">
            <h1 className="font-weight-light">About Us</h1>
            <p style={{"font-size":"15px"}}>
              We are a team of highly experienced IT professionals who can help
              you achieve your career objectives by conducting live online
              classes. We transform your life by helping you get an IT job as
              per current market requirements. We empower minds by deciphering
              coding skills. We believe that the world of coding can be
              conquered with the right guidance. We have already helped hundreds
              of students to get jobs in the IT sector. We teach online courses
              through live classes on topics: Java, Spring Boot, Apache Camel,
              Kafka, Microservices, Docker, Kubernetes, and other open source
              technologies using video conferencing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
