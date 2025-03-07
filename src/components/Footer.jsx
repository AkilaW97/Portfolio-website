import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} [Jhon Doe]. All rights reserved. </p>

            <div className="social-links">
                <a href="https://github.com/AkilaW97" target='_blank' rel='noopener noreferrer'>Github</a>&nbsp;
                <a href="https://linkedin.com/in/AkilaW97" target='_blank' rel='noopener noreferrer'>LinkedIn</a>&nbsp;
                <a href="mailto:your-jd@example.com">Email</a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;