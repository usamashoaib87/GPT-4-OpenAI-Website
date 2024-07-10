import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt4__footer section__padding">
    <div className="gpt4__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt4__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt4__footer-links">
      <div className="gpt4__footer-links_logo">
        <img src={gpt3Logo} alt="gpt4_logo" />
        <p>Developed by M Usama Shafqat, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Get in touch</h4>
        <p>Block J3, Johar Town Lahore</p>
        <p>+92 3176648100</p>
        <p>usamashoaib87@gmail.com</p>
      </div>
    </div>

    <div className="gpt4__footer-copyright">
      <p>@2024 GPT-4.0. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
