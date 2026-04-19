import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>FuturVia</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building FuturVia, India's First Mobile-First. Free, world-class tech education for every student in India. Breaking barriers, building futures.



            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Emeritus</h4>
                <h5>1 year · Mumbai</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Senior Software Engineer : Designed and implemented academic workflow automaIon tools, streamlining course delivery and reducing manual intervenIon by 40%,
thereby enhancing learning experience and operaIonal eﬃciency. Built robust data visualisation dashboards to monitor learner performance and engagement metrics, enabling academic teams to make data-
driven intervenIons and improve course outcomes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Trainer</h4>
                <h5>Upgrad</h5>
              </div>
              <h3>2023-2024</h3>
            </div>
            <p>
              Provided mentorship to students in Data Structures, Algorithms, and Full Stack Web Development, helping bridge theoreIcal knowledge with
practical applicaIons. Guided students in applying complex algorithms to realtime industry projects, preparing them for real-world development environments.Delivered tailored learning paths, ensuring students grasp core programming principles in C++, Java, and C.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Devtown</h5>
              </div>
              <h3>2022 - 2023</h3>
            </div>
            <p>
              Developed and optimised web features using a full-stack technology stack, including React, Node.js, Express, MongoDB, and MySQL, to
deliver responsive interfaces and eﬃcient backend soluIons. Integrated APIs for seamless component communication and enhanced user
experience.Overdone full development lifecycle from planning to deployment, uIlising Git/GitHub for streamlined version control. Optimised server-
client interactions with RESTful APIs and JSON, ensuring dynamic, responsive website performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
