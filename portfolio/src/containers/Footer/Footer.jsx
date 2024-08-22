import React from 'react'
import './footer.css'
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__container-top">
          <div className="footer__icons">
            <a
              href="https://www.instagram.com/disha_sng/"
              target="__blank"
              rel="noreferrer"
            >
              <BsInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/disha-sangani-53801730b/"
              target="__blank"
            >
              <BsLinkedin size={30} />
            </a>
            <a
              href="https://www.github.com/dishasangani21"
              target="__blank"
              rel="noreferrer"
            >
              <BsGithub size={30} />
            </a>
           
          </div>
        </div>
        <div className="footer__Container-down">
          <h3>This website is designed by Disha</h3>
        </div>
      </div>
    </>
  );
}

export default Footer