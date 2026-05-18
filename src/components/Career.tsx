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
                <h4>B.E. CSE Student</h4>
                <h5>Shetty Institute of Technology</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>

            <p>
              Currently pursuing Computer Science Engineering with strong interest
              in Artificial Intelligence, Web Development, Open Source, and UI/UX Design.
              Continuously learning modern technologies and improving development skills
              through practical projects and technical exploration.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source Learner</h4>
                <h5>GitHub & Community Programs</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>

            <p>
              Exploring GitHub workflows, open-source collaboration, and contribution
              practices through technical communities and learning programs. Building
              practical understanding of version control, project management, and
              collaborative development.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon & Innovation Participant</h4>
                <h5>Student Developer</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>

            <p>
              Participating in hackathons, startup events, and innovation programs
              focused on AI, web technologies, and problem-solving. Interested in
              building impactful solutions and improving technical creativity through
              real-world challenges.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;