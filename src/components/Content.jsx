import Typed from "typed.js";
import React from "react";
import Card from "./Card.jsx";
import { ContactMe } from "./ContactMe.jsx";
import { useEffect, useRef } from "react";
import "./Content.css";

export default function Content() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Python", "JavaScript", "C++", "PHP", "Bash", "C"],
      typeSpeed: 125,
      backSpeed: 80,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(
      "#root .projects-section article .card"
    );

    const options = {
      root: null,
      threshold: 0.3,
      rootMargin: "0px",
    };

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("play-project-animation");
        }
      });
    }, options);

    cards.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  return (
    <>
      <section className="hero-section">
        <article>
          <h3>
            Hi, There!<br></br>I'm Hristo Hristov
          </h3>
          <p>
            I am a <span>Machine Learning Enthusiast</span> from Sofia,
            Bulgaria.
          </p>
          <ul className="socials">
            <li>
              <a
                href="https://www.linkedin.com/in/hristo-hristov-a46557214/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/HHristov22" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
          <a className="btn" href="/pdf/CV_Hristo_Hristov.pdf" download>
            Download CV
          </a>
        </article>
        <article>
          <h3>Tech Stack: </h3>
          <div>
            <span ref={el}></span>
          </div>
        </article>
      </section>

      <section className="education-section">
        <article>
          <div>
            <a
              href="https://www.udemy.com/certificate/UC-425c2408-7ed0-4600-bf45-495c929d91ac/"
              target="_blank"
            >
              <img
                src="/images/certificate_udemy_computer_vision_deep_learning_image.jpg"
                alt="certificate-image"
              />
            </a>
          </div>
          <div>
            <a href="./images/dimploma_moscow.jpg" target="_blank">
              <img src="/images/dimploma_moscow.jpg" alt="certificate-image" />
            </a>
          </div>
          <div>
            <a
              href="https://www.udemy.com/certificate/UC-16b5feac-53d1-47c8-85c6-484221ee4f1c/"
              target="_blank"
            >
              <img
                src="/images/certificate_udemy_js_image.jpg"
                alt="certificate-image"
              />
            </a>
          </div>
        </article>
        <article>
          <h3>Competitions & Certificates</h3>
          <h2>Find all certifications on my LinkedIn. </h2>
        </article>
      </section>

      <section className="projects-section" id="projects">
        <h3 className="section-title">Projects</h3>
        <div className="title-underline"></div>
        <article>

          <Card
            name="ML examples"
            description="This repository offers comprehensive code examples and exercises for various machine learning topics."
            link="https://github.com/HHristov22/ML_Examples"
            image="/images/ml_examples.png"
          />

          <Card
            name="Computer Vision examples"
            description="Basic computer vision techniques and implementations, including Canny Edge, Classification, Facial recognition, and image processing."
            link="https://github.com/HHristov22/ComputerVision_basic"
            image="/images/ComputerVision_basic.png"
          />

          <Card
            name="CardFight"
            description="Strategic digital card game challenging players to outsmart AI opponents with dynamic gameplay."
            link="https://github.com/HHristov22/CardFight"
            image="/images/CardFight.png"
          />

          <Card
            name="MeetMe"
            description="Calendar with Virtual Rooms for project defense or consultation."
            link="https://github.com/HHristov22/MeetMe"
            image="/images/MeetMe.jpg"
          />

          <Card
            name="Portfolio"
            description="This portfolio is made using ReactJS, VanillaJS and Material UI."
            link="https://github.com/HHristov22/hhristov"
            image="/images/Portfolio.png"
          />
        </article>
      </section>

      <section className="contact-us-section" id="contact-me">
        <h3 className="section-title">Contact Me</h3>
        <div className="title-underline"></div>
        <article>
          <ContactMe />
        </article>
      </section>
    </>
  );
}
