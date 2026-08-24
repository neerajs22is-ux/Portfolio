import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>NEERAJ S</h1>
            <p className="landing-role">
              Growth Ops &amp; Web Developer
            </p>
            <p className="landing-stack">
              Webflow · Framer · Meta &amp; Google Ads, Bengaluru, India
            </p>
          </div>
          <div className="landing-info">
            <h3>I Build</h3>
            <div className="landing-cycle">
              <div className="landing-cycle-track">
                <div className="landing-cycle-item">Websites</div>
                <div className="landing-cycle-item">Campaigns</div>
                <div className="landing-cycle-item">
                  Client
                  <br />
                  Relationships
                </div>
                <div className="landing-cycle-item">AI Agents</div>
                <div className="landing-cycle-item" aria-hidden="true">
                  Websites
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
