import React from "react";
import { Helmet } from "react-helmet";
import frontEndImg from '../img/angular-reactjs-frontend-technologies-online-course-with-live-classes.webp'
function Frontendcourse() {
  return (
    <div className="courses">
      <Helmet>
        <meta name="title" content="Online course based on Angular and React js with interactive live classes" />
        <meta
          name="description"
          content="Learn front end technologies such as angular and react through online course with live classes."
        />
        <meta
          name="keywords"
          content="Learn angular and react js in live classes, learn front end technologies in interactive programming sessions."
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="codingconquerors" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="Online course based on Angular and React js with interactive live classes"
        />
        <meta property="og:site_name" content="liveonlineclasses" />
        <meta property="og:url" content="https://www.liveitcourses.com/" />
        <meta
          property="og:description"
          content="Learn online course based on java, spring boot, apache camel, Kafka, microservices, Docker, Kubernetes with live classes."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={frontEndImg}
        />
        <meta
          property="og:image:alt"
          content="angular, react js online course with interactive classes"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@liveitcourses" />
        <meta
          name="twitter:title"
          content="Online course based on Angular and React js with interactive live classes"
        />
        <meta
          name="twitter:description"
          content="Learn front end technologies such as angular and react through online course with live classes."
        />
        <meta
          name="twitter:image"
          content={frontEndImg}
        />
      </Helmet>
      <div className="container">
        <div className="row my-5">
          <div className="col-xs-5 col-sm-6 col-lg-4">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={frontEndImg}
              alt="Best online IT courses based on live classes and interactive programming sessions"
            />
          </div>
          <div className="col-xs-7 col-sm-6 col-lg-8">
            <h1 ><u>Angular, React js based Online Course with Live Classes.</u></h1>
            <p >
              Just like our other IT courses, this course is also based on the one to one session with students. Each topic is covered through interactive programming sessions.
            </p>
            <h2 >
              Course Outline:
            </h2>
            <p >Launching soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontendcourse;
