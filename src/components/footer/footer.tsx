import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterContainer,
  FooterInner,
  FooterLogo,
  FooterColumns,
  FooterColumn,
  FooterTitle,
  FooterLink,
  FooterSocial,
  SocialIcon,
  FooterBottom,
  FooterCopyright
} from './styles';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterInner>
        <FooterColumns>
          <FooterColumn>
            <Link to="/">
              <FooterLogo>
                <span className="terminal-text">&lt;</span>
                <span>Orbit-Ops</span>
                <span className="terminal-text">/&gt;</span>
              </FooterLogo>
            </Link>
            <p>Specialized in web design, graphic design, automation, and customer support solutions.</p>
            <FooterSocial>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </SocialIcon>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </SocialIcon>
              <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </SocialIcon>
            </FooterSocial>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Services</FooterTitle>
            <FooterLink to="/services#web-design">Web Design</FooterLink>
            <FooterLink to="/services#graphic-design">Graphic Design</FooterLink>
            <FooterLink to="/services#automation">Automation</FooterLink>
            <FooterLink to="/support">Support</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Company</FooterTitle>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Contact</FooterTitle>
            <p>Email: info@orbit-ops.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>123 Tech Avenue,<br />Cyberspace, CS 12345</p>
          </FooterColumn>
        </FooterColumns>
        
        <FooterBottom>
          <FooterCopyright>
            &copy; {currentYear} <span className="terminal-text">&lt;Orbit-Ops/&gt;</span>. All rights reserved.
          </FooterCopyright>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;