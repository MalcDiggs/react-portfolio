import React from 'react';
import credentials from './myResume.png';

function Resume() {
  return (
    <main id="main">
      <section id="about" className="about">
        <div className="container">
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <div className="section-title about content">
              <h2>Resume</h2>
              <h2>Front-end Proficiencies</h2>
          <ul>
            <li> HTML</li>
            <li> CSS</li>
            <li> Javascript</li>
            <li> JQuery</li>
            <li> Responsive Design</li> 
            <li> React</li>
            <li> Bootstrap</li>
          </ul>
          <h2>Back-end Proficiencies</h2>
          <ul>
          <li> APIs</li>
          <li> Node</li>
          <li> Express</li>
          <li> MySQL, Sequelize</li>
          <li> MongoDB, Mongoose</li> 
          <li> REST</li>
          <li> MVC</li>
          </ul>
              <button className="about content resume-btn">
                <a href={credentials} target="blank">
                  <span className="resume-btn">
                    Click here to Download my Resume
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resume;