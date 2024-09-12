import React from 'react';
import './About.css'; // Importing CSS for styling the about page

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About Recipe Finder</h1>
        <p>
          Recipe Finder is your go-to app for finding the best recipes from around the world. Whether you're looking for a quick snack or a gourmet dinner, our app helps you discover the perfect recipe for any occasion.
        </p>
        <p>
          We believe that cooking should be enjoyable, and we strive to bring you recipes that are not only delicious but also easy to make.
        </p>
        <h3>Our Mission</h3>
        <p>
          To provide a comprehensive collection of recipes that inspire people to cook and enjoy food with their loved ones.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or suggestions, feel free to reach out to us at <a href="mailto:info@recipefinder.com">info@recipefinder.com</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
