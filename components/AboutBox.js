import React from "react";
// Import the CSS file for styling

const AboutBox = () => {
  return (
    <div className="about-container">
      <div className="about-sidebar">
        <h2>ABOUT US</h2>
        <ul className="about-links">
          <li className="active-link">ABOUT IMPETUS</li>
          <li>ABOUT ME</li>
          <li>ABOUT IIESTS</li>
        </ul>
      </div>
      <div className="about-content">
        <p>
          Impetus, the technical festival of IIEST Shibpur's Mechanical
          Engineering Department, brings together students, industry leaders,
          and researchers to showcase technical skills and innovations. Known
          for its intellectually stimulating events like paper presentations,
          project exhibitions, and hackathons, Impetus encourages creative and
          critical thinking. It's a great platform for students to network,
          build portfolios and gain exposure to the latest trends and
          technologies in mechanical engineering.
        </p>
        <a href="/events" className="event-link">
          Check out our events
        </a>
      </div>
    </div>
  );
};

export default AboutBox;
