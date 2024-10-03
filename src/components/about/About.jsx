import React from 'react';
import AboutImg from '/amine.jpg';
import CV from '/cv8.pdf';
import './about.scss';

const About = () => {
  const introduction = `I am a 5th-year computer engineering student, currently pursuing my degree. 
  Passionate about solving complex problems, I have developed strong technical skills and the ability 
  to apply computing concepts in real-world projects.`;

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about__content">
          {/* Image and Text Grid */}
          <div className="about__image-container">
            <img src={AboutImg} alt="Profile" className="about__img" />
          </div>
          
          <div className="about__text-container">
            <p className="about__description">{introduction}</p>
            <a href={CV} className="cv-button" download={CV}>
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
