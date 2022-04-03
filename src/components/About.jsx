import React from "react";
import { Helmet } from "react-helmet";
import aboutImg from '../img/conquer-the-world-of-coding.webp'
function About() {
  return (
    <div className="about">
      <Helmet>
        <meta name="title" content="A team of IT professionals who provides best online IT courses based on live classes and interactive programming sessions" />
        <meta
          name="description"
          content="Learn online IT courses in live classes from professionals. We teach online live courses based on java, spring boot, apache camel, Kafka, microservices, Docker, Kubernetes, angular, react etc."
        />
        <meta
          name="keywords"
          content="live online classes, online IT courses, live coding classes, learn programming with live classes, interactive programming classes, interactive programming courses, one to one coding classes, one to one programming classes"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="0Vwwc_sg_KrnN4F8z_TpK81iov4KqYMh343lVE1IxPI"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="codingconquerors" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="A team of IT professionals who provides best online IT courses based on live classes and interactive programming sessions"
        />
        <meta property="og:site_name" content="liveonlineclasses" />
        <meta property="og:url" content="https://www.liveitcourses.com/" />
        <meta
          property="og:description"
          content="Learn online IT courses in live classes from professionals. We teach online live courses based on java, spring boot, apache camel, Kafka, microservices, Docker, Kubernetes, angular, react etc."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={aboutImg}
        />
        <meta
          property="og:image:alt"
          content="IT courses with interactive classes"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@liveitcourses" />
        <meta
          name="twitter:title"
          content="A team of IT professionals who provides best online IT courses based on live classes and interactive programming sessions"
        />
        <meta
          name="twitter:description"
          content="Learn online IT courses in live classes from professionals. We teach online live courses based on java, spring boot, apache camel, Kafka, microservices, Docker, Kubernetes, angular, react etc."
        />
        <meta
          name="twitter:image"
          content={aboutImg}
        />
      </Helmet>
      <div className="container">
        <div className="row my-5">
          <div className="col-xs-5 col-sm-6 col-lg-4">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={aboutImg}
              alt="IT courses with interactive classes"
            />
          </div>
          <div className="col-xs-7 col-sm-6 col-lg-8">
            <h1 ><u>We are IT Professionals who teach coding skills through live classes</u></h1>
            <p>
              We are a team of highly experienced IT professionals who can help
              you achieve your career objectives through our best in the market live online
              courses. We transform your life by helping you get an IT job as
              per current market requirements. We empower minds by deciphering
              coding skills. We believe that the world of coding can be
              conquered with the right guidance. We have already helped hundreds
              of students to get jobs in the IT sector. We teach online courses
              through live classes on topics: Java, Spring Boot, Apache Camel,
              Kafka, Microservices, Docker, Kubernetes, and other open source
              technologies using video conferencing. All the course topics are
              covered in live classes which help in resolving students issues
              spontaneously. With every course topic, corresponding interview
              questions are also covered which helps students prepare for
              interview along with course topics. No question asked money back
              guarantee after one week of classes if a student is not satisfied.
            </p>
            <h2 >Our Teaching Ideology</h2>
            <p >
              We offer online courses purely based on live classes. During these
              live classes, we understand the existing level of students'
              knowledge and experience, and the transformation starts from
              there. This is exactly the opposite of learning through recorded
              lectures which normally take a lot longer to complete and do not
              clear your doubts. We clear your doubts instantly and help you
              achieve your goals rapidly. We believe that no student is weak, it
              is just the gap in the level of understanding between a student
              and a teacher which makes things complicated. Our interactive programming classes
              fill all the gaps.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
