import React from "react";
import "./experince.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import nextLogo from "../../../src/static/media/nextjs.svg";
import { SiMongodb } from "react-icons/si";

const Experince = () => {
  return (
    <>
      <section className="experince__section" id="experience">
        <div className="experince__section-container" id="experince">
          <div className="experince__section-container__left">
            <h1 className="gradient__text">Tech-Stack</h1>
            <p>
              I am FullStack Web-developer, I use ReactJS and NextJs for
              front-end programming and ExpressJs/ NodeJs for Back-end
              programming. For the Databases I use MongoDB and SQL. I can
              create any kind of website design. All of my important skills are
              mentioned here.
            </p>
          </div>
          <div className="experince__section-container__right">
            <article className="experince__card">
              <AiFillHtml5 size={27} color="red" />
              <h3>HTML5</h3>
              <p>The HTML5 is used to build basic structure for web pages.</p>
            </article>
            <article className="experince__card">
              <FaCss3 size={27} color="blue" />
              <h3>CSS3</h3>
              <p>The CSS3 is used to add custom design in the web pages.</p>
            </article>
            <article className="experince__card">
              <SiJavascript size={27} color="yellow" />
              <h3>JavaScript</h3>
              <p>
                JavaScript is used to handle events and logical events in web
                pages.
              </p>
            </article>
            <article className="experince__card">
              <FaReact size={27} color="violet" />
              <h3>ReactJS</h3>
              <p>ReactJS is a Library that is used in Front-End developing.</p>
            </article>
            <article className="experince__card">
              <img src={nextLogo} alt="NextJs" width="27px" height="27px" />
              <h3>NextJs</h3>
              <p>
                NextJs is a framework built on top of ReactJs. Which is able to
                handle server side rendering.
              </p>
            </article>
            <article className="experince__card">
              <SiMongodb size={27} color="green" />
              <h3>MongoDB</h3>
              <p>
                MongoDB is a database framework that works on NoSql and is free and easy to use.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experince;
