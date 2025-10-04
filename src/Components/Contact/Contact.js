import React from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import Heading from "../../Elements/Heading/Heading";
import Button from "../../Elements/Button/Button";
import "./Contact.css";
import linkedinLogo from "./ContactImage/linkedin.png";
import gmailLogo from "./ContactImage/gmail.png";

const Contact = () => {
  const email = "kishankumar1048@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/kishan-kumar-zalavadia/";

  return (
    <div className="contact-section" id="contact-me">
      <Heading title={"Contact Me"} />
      <GlassCard>
        <p className="contact-note">
          I’m always excited to connect! Feel free to reach out through email or
          LinkedIn.
        </p>
        <div className="contact-buttons">
          <Button
            text={
              <>
                <img src={gmailLogo} alt="Gmail" className="btn-icon" />
                Mail Me
              </>
            }
            type="primary"
            onClick={() => (window.location.href = `mailto:${email}`)}
          />

          <Button
            text={
              <>
                <img src={linkedinLogo} alt="LinkedIn" className="btn-icon" />
                LinkedIn
              </>
            }
            type="primary"
            onClick={() => window.open(linkedinUrl, "_blank")}
          />
        </div>
      </GlassCard>
    </div>
  );
};

export default Contact;
