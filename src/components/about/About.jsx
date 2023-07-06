import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed Projects</small>
            </article>
          </div>
          <p>
            Allow me to introduce an exceptional individual who possesses a
            captivating combination of qualities. With a geeky personality, they
            thrive in the realm of technology, constantly exploring and
            embracing the latest advancements. Alongside their intellectual
            pursuits, they also showcase their athletic prowess as a dedicated
            sports person, demonstrating their commitment and discipline. As a
            team worker, they excel in collaborative environments, leveraging
            their communication skills and empathy to foster a harmonious
            atmosphere. Their natural inclination towards leadership shines
            through as they effortlessly guide and inspire others, exhibiting a
            profound understanding of effective decision-making and delegation.
            This individual's adventurous spirit and love for nature make them
            the perfect companion for outdoor escapades, seeking new thrills and
            exploring the wonders of the world. Their insatiable curiosity fuels
            their passion for continuous learning, always eager to acquire new
            knowledge and broaden their horizons. Unafraid of taking risks, they
            boldly embrace challenges, approaching them with resilience and a
            determined mindset. With their extroverted nature, they effortlessly
            engage with others, exuding charisma and creating meaningful
            connections. In summary, this remarkable individual encompasses a
            compelling blend of qualities that make them an exceptional addition
            to any team or endeavor.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
