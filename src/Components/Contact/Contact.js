import React from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import Heading from "../../Elements/Heading/Heading";
import "./Contact.css";
import linkedinLogo from "./ContactImage/linkedin.png";
import gmailLogo from "./ContactImage/gmail.png";

const Contact = () => {
  const email = "kishankumar1048@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/kishan-kumar-zalavadia/";

  return (
    <div className="contact-section">
      <Heading title={"Contact Me"} />
      <GlassCard>
        <p className="contact-note">
          I’m always excited to connect! Feel free to reach out through email or
          LinkedIn.
        </p>
        <p className="contact-email">{email}</p>

        <div className="contact-buttons">
          <a href={`mailto:${email}`} className="contact-btn gmail-btn">
            <img src={gmailLogo} alt="LinkedIn" className="gmail-icon" />
            Mail Me
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn linkedin-btn"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="linkedin-icon" />
            LinkedIn
          </a>
        </div>
      </GlassCard>
    </div>
  );
};

export default Contact;
