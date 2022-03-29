import React from "react";
import { Helmet } from "react-helmet";
function Backendcourse() {
  return (
    <div className="courses">
      <Helmet>
        <meta name="title" content="Online courses based on Java, spring boot and microservices with interactive live classes" />
        <meta
          name="description"
          content="Learn backend technologies such as java, spring boot, apache camel, Kafka, microservices, Docker, Kubernetes through online course with live classes."
        />
        <meta
          name="keywords"
          content="Learn Java, spring boot and microservices in live classes, interactive programming sessions."
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="codingconquerors" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="Online course based on Java, spring boot and microservices with interactive live classes"
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
          content="https://www.liveitcourses.com//assets/images/java-spring-boot-microservices-online-course-with-live-classes.svg"
        />
        <meta
          property="og:image:alt"
          content="java, spring boot, apache camel, Kafka, microservices online course with interactive classes"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@liveitcourses" />
        <meta
          name="twitter:title"
          content="Online course based on Java, spring boot and microservices with interactive live classes"
        />
        <meta
          name="twitter:description"
          content="Learn online course based on java, spring boot, apache camel, Kafka, microservices, Docker, Kubernetes with live classes."
        />
        <meta
          name="twitter:image"
          content="https://www.liveitcourses.com//assets/images/java-spring-boot-microservices-online-course-with-live-classes.svg"
        />
      </Helmet>
      <div className="container">
        <div className="row my-5">
          <div className="col-xs-5 col-sm-6 col-lg-4">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/assets/images/java-spring-boot-microservices-online-course-with-live-classes.png"
              alt="Online IT courses with live classes"
            />
          </div>
          <div className="col-xs-7 col-sm-6 col-lg-8">
            <h1 className="font-weight-light">Java, Spring Boot and Microservices based Online Course with Live Classes</h1>
            <p >
            This Course is designed in such a way that it starts from scratch and cover every aspect upto production deployment. Basic knowledge of java is prerequisite and Special discount for needy students. New course batch starts monthly.
            </p>
            <h2 className="font-weight-light">
              Course Outline:
            </h2>
            <p >This course is based on Spring Boot and Java. Duration of the course is from 1 to 1.5 months. We cover each of the below topics in live classes. Every problem students face is resolved on the spot. <br></br> 1. Understanding basics of Microservices, MVC Design pattern, and Restful Webservices<br></br>2. Implementing HTTP methods, exception handling in Spring Boot<br></br>3. Interaction with database (CRUD operations. using JPA and H2 Database<br></br>4. HATEOAS, Internationalization, Content Negotiation, Dynamic and static filtering for Restful Services<br></br>5. Implementing Swagger documentation and Monitoring APIs with Spring Boot Actuator, HAL explorer, Restful services versioning<br></br>6. Authentication using Spring Security and JWT<br></br>7. Introduction to Apache camel and implementing Spring boot Webservices using apache camel routes<br></br>8. Implementing various important Microservices concepts such as Zuul, Eureka, Ribbon and Feign, Zipkin and Hystrix<br></br>9. Introduction to Docker and Kubernetes and use them with Spring boot Microservices<br></br>10. Adding test cases into Microservices using Mocks (unit, functional, and integration.<br></br>11. Introduction to Gradle and creating build.gradle file and run different tasks such as clean, build, jocoko test report, etc.<br></br>12. Understanding CI/CD and integrating a project with the jenkins build tool<br></br>13. How to debug a microservice project and how to do dynamic and static Code reviews<br></br>14. Call one microservice to another microservice using synchronous and asynchronous methods<br></br>15. Microservices Design patterns.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backendcourse;
