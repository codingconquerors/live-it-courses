import React from "react";

function WhyUs() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-top my-5">
          <div className="col-xs-5 col-sm-6 col-lg-4">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/assets/images/what-online-courses-we-provide.png"
              alt="Online IT courses with live classes"
            />
          </div>
          <div className="col-xs-7 col-sm-6 col-lg-8">
            <h1 className="font-weight-light">Why Us</h1>
            <h2 className="font-weight-light">
              We have the answers to all your questions:
            </h2>
            <p style={{"font-size":"15px"}}>
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
            <h2 className="font-weight-light">Our Teaching Ideology:</h2>
            <p style={{"font-size":"15px"}}>
              We offer online courses purely based on live classes. During these
              live classes, we understand the existing level of students'
              knowledge and experience, and the transformation starts from
              there. This is exactly the opposite of learning through recorded
              lectures which normally take a lot longer to complete and do not
              clear your doubts. We clear your doubts instantly and help you
              achieve your goals rapidly. We believe that no student is weak, it
              is just the gap in the level of understanding between a student
              and a teacher which makes things complicated. Our live classes
              fill all the gaps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
