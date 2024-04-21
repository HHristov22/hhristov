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
            I am a <span>passionate software engineer</span> from Sofia,
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
              href="https://www.udemy.com/certificate/UC-16b5feac-53d1-47c8-85c6-484221ee4f1c/"
              target="_blank"
            >
              <img
                src="/images/certificate_udemy_js_image.jpg"
                alt="certificate-image"
              />
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
        </article>
      </section>

      <section className="projects-section" id="projects">
        <h3 className="section-title">Projects</h3>
        <div className="title-underline"></div>
        <article>
          <Card
            name="Coding Trivia"
            description="Quiz-themed website featuring questions about both C# and JavaScript programming languages. Made using HTML, CSS and JavaScript."
            link="https://github.com/KristiyanHristov04/CodingTrivia"
            image="/images/coding-trivia-image.png"
            url="https://codingtrivia2023.netlify.app/"
          />

          <Card
            name="Fitness"
            description="Landing page made with educational purposes built with HTML, CSS and JS."
            link="https://github.com/KristiyanHristov04/Fitness-ResponsiveWebsite?tab=readme-ov-file"
            image="/images/fitness-main.jpg"
            url="https://fitnesslandingpagebg.netlify.app/"
          />

          <Card
            name="Car Renting System"
            description="Web application made with ASP.NET Core MVC. It fully incorporates all CRUD operations."
            link="https://github.com/KristiyanHristov04/CarRentingSystem-ASP.NET-MVC?tab=readme-ov-file"
            image="/images/car-renting-system-mvc-image.jpg"
          />

          <Card
            name="Weather App"
            description="Weather Application using OpenWeather API made with Windows Forms (.NET 6.0)."
            link="https://github.com/KristiyanHristov04/WeatherApp?tab=readme-ov-file"
            image="/images/weather-app-image.png"
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
