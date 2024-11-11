import React from 'react';
import AboutImg from '/amine.jpg';
import CV from '/(Français) (Français) (2).pdf';
import './about.scss';
const About = () => {
  const description = `
    I am a 5th-year computer engineering student passionate about solving complex problems. 
    My journey has equipped me with a robust set of technical skills, enabling me to tackle real-world projects effectively.
  `;

  return (
    <section className="about" id="about">
      <div className="container about__container">
        <h2 className="about__title">About Me</h2>
        
        <div className="about__content">
          <div className="about__image-container">
            <img src={AboutImg} alt="Profile" className="about__img" />
          </div>

          <div className="about__text">
            <p className="about__description">{description}</p>
            <a href={CV} className="btn download-btn" download>
              Download My CV
              <svg className="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 16.5l4-4h-3V3h-2v9.5H8l4 4zm7.59-4.29L20 12.91l-7.59 7.59a1 1 0 01-1.42 0L4 12.91l.41-.41L12 19.1l7.59-7.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
