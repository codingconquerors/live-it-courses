import React from "react";

function OnlineCourses() {
  return (
    <div className="courses">
      <div className="container">
        <div className="row my-5">
          <div className="col-xs-5 col-sm-6 col-lg-4">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/assets/images/online-courses-we-offer-with-live-classes.png"
              alt="Online IT courses with live classes"
            />
          </div>
          <div className="col-xs-7 col-sm-6 col-lg-8">
            <h1 className="font-weight-light">Courses</h1>
            <p >
              We provide multiple online IT courses based on differnt technologies such as Java, Angular, Spring. All of these IT courses are based on live classes. As of now, we provide two comprehensive 'all in one' live courses. One of the live courses is 'BackEnd Course' based on technologies such as Java, Springboot, Kubernetes, Docker, Apache Camel and Kafka, Database interaction, etc. This course is already launched. The other one is the 'FrontEnd Course' which we plan to launch soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineCourses;
