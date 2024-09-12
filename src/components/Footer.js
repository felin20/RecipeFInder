import React from 'react';
import './Footer.css'; // Importing CSS for footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Recipe Finder. All rights reserved.</p>
        
        {/* Optional: Add social media or additional links */}
      </div>
    </footer>
  );
};

export default Footer;
