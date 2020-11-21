import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row footer-container">
        <div className="col-md-6">
          <h4 className="footer-title">About Us</h4>
          <p className="footer-item">We are a team of nurses, doctors, technologies and executives dedicated to help nurses find jobs that they love</p>
          <p className="footer-item">All copyrights © reserved 2020 - Health Explore</p>
        </div>
        <div className="col-md-3">
          <h4 className="footer-title">Sitemap</h4>
          <a href="/#" className="footer-item">Nurses</a>
          <a href="/#" className="footer-item">Employers</a>
          <a href="/#" className="footer-item">Social networking</a>
          <a href="/#" className="footer-item">Jobs</a>
        </div>
        <div className="col-md-3">
          <h4 className="footer-title">Privacy</h4>
          <a href="/#" className="footer-item">Terms of use</a>
          <a href="/#" className="footer-item">Privacy policy</a>
          <a href="/#" className="footer-item">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;