import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Anuj Patel</h4>
      <h4>Copyright &copy; 2024 DS</h4>
      <div className="footerLinks">
        <a href="https://github.com/Anuj-16" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/anuj-patel-421871229/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:anujpatel.in16@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
