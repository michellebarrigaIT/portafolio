import type { FC } from "react";
import "./Footer.scss";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

type FooterProps = {
  userSocialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
};

const Footer: FC<FooterProps> = ({ userSocialLinks }) => {
  return (
    <div className="footer">
      <p>Thanks for visiting my portfolio</p>
      <div className="social-links">
        {userSocialLinks.github && (
          <a
            href={userSocialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        )}
        {userSocialLinks.linkedin && (
          <a
            href={userSocialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
        )}
        {userSocialLinks.twitter && (
          <a
            href={userSocialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
        )}
      </div>
    </div>
  );
};


export default Footer;
