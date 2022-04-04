import React from "react";
import { Helmet } from "react-helmet";
import whyUsImg from '../img/learn-coding-in-live-classes.webp'
function WhyUs() {
  return (
    <div className="home">
      <Helmet>
        <meta name="title" content="Why our live online courses are best in the market" />
        <meta
          name="description"
          content="We provide best online technology courses for computer science and IT students."
        />
        <meta
          name="keywords"
          content="best online IT courses"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="codingconquerors" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="Why our live online courses are best in the market"
        />
        <meta property="og:site_name" content="liveonlineclasses" />
        <meta property="og:url" content="https://www.liveitcourses.com/" />
        <meta
          property="og:description"
          content="We provide best online technology courses for computer science and IT students."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={whyUsImg}
        />
        <meta
          property="og:image:alt"
          content="Why our live online courses are best in the market"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@liveitcourses" />
        <meta
          name="twitter:title"
          content="Why our live online courses are best in the market"
        />
        <meta
          name="twitter:description"
          content="We provide best online technology courses for computer science and IT students."
        />
        <meta
          name="twitter:image"
          content={whyUsImg}
        />
      </Helmet>
      <div className="container">
        <div className="row align-items-top my-5">
          <div className="col-xs-5 col-sm-6 col-lg-4">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={whyUsImg}
              width="385"
              height="352"
              alt="Best online IT courses based on live classes and interactive programming sessions"
            />
          </div>
          <div className="col-xs-7 col-sm-6 col-lg-8">
            <h1 ><u>Why our live online courses are best in the market</u></h1>
            <h2 >
              We have the answers to all your questions:
            </h2>
            <p >
              - Are you a computer science or an IT student who is afraid of
              coding? <br></br> We can help you in conquering this fear within a
              month. <br></br> - Are you a computer science or an IT student who
              is worried about securing a job in IT?<br></br> If yes, then we
              can guide you in securing an IT job. <br></br> - Are you an
              unemployed IT graduate who is lost in today's technology stack and
              not sure where to start. <br></br> If yes, we can help you in
              choosing the appropriate technology stack, and securing a job.{" "}
              <br></br> - Are you a former IT professional who is newly
              immigrated to North America but is not able to get a job?{" "}
              <br></br> If yes, then you are in right place, we can help you in
              securing a job.<br></br> - Are you a former IT graduate who had to
              leave the IT field because of some personal reason, and looking
              back to get an entry into the IT field? <br></br> If yes, then you
              are in the right place.
            </p>
            <p>
              Last but not least, we make learning coding easy by teaching coding through live coding sessions.
            </p>
            <h2 >
              We offer several kind of online IT courses based on different technologies
            </h2>
            <p >
              We provide multiple online IT courses based on differnt technologies such as Java, Angular, Spring. All of these IT courses are based on live classes. As of now, we provide two comprehensive 'all in one' live courses. For instance, one of the live courses is 'BackEnd Course' based on technologies such as Java, Springboot, Kubernetes, Docker, Apache Camel and Kafka, Database interaction, etc. The other one is the 'FrontEnd Course' which is based on the frontent technologies such as angular, react.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
