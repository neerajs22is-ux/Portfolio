import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Journey</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development</h4>
                <div className="career-meta">
                  <h5>Thrine</h5>
                  <h3>Dec 2023 – Present</h3>
                </div>
              </div>
            </div>
            <p>
              Designed and shipped 15+ production sites using Webflow and
              Framer, including Wope, Anuva Wealth, Givingly, Moureya Concepts, owning
              the full pipeline from Figma handoff to live deployment, while
              completing an Information Science Engineering degree.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>
                  Growth &amp; Performance
                  <br />
                  Marketing
                </h4>
                <div className="career-meta">
                  <h5>Thrine</h5>
                  <h3>Mid 2024 – Present</h3>
                </div>
              </div>
            </div>
            <p>
              Ran end-to-end social and paid campaigns, covering content, ads,
              influencer sourcing-to-delivery, across hospitality, real
              estate, F&amp;B, and wellness, including Thunder Hospitality's
              venue portfolio and CB Moureya Real Estate.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>
                  Client Nurturing and
                  <br />
                  Acquisition
                </h4>
                <div className="career-meta">
                  <h5>Thrine</h5>
                  <h3>Early 2025 – Present</h3>
                </div>
              </div>
            </div>
            <p>
              Closed 10+ client accounts through cold outreach and nurture,
              owning the sales cycle without a dedicated sales team. Acted as
              informal account lead for hospitality clients, coordinating
              vendors and on-ground logistics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduated, ISE</h4>
                <div className="career-meta">
                  <h5>SVIT</h5>
                  <h3>Jun–Jul 2026</h3>
                </div>
              </div>
            </div>
            <p>
              Graduated with a CGPA of 7.3, built a live agency career in
              parallel with the degree rather than after it, closing clients
              and shipping production work while still a student.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Product Engineer</h4>
                <div className="career-meta">
                  <h5>Thrine</h5>
                  <h3>Mid 2026 – Present</h3>
                </div>
              </div>
            </div>
            <p>
              Building an internal CRM and workflow-automation system using AI
              agents, while backfilling Python, LangChain, PostgreSQL, and
              Docker to move from directing AI tools to building them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

