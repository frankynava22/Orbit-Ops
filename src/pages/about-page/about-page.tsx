import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AboutContainer,
  AboutHero,
  AboutHeroContent,
  AboutSection,
  AboutContent,
  AboutImage,
  MissionSection,
  MissionContent,
  MissionList,
  MissionItem,
  TeamSection,
  TeamGrid,
  TeamMember,
  TeamImage,
  TeamInfo,
  TeamName,
  TeamPosition,
  TeamSocial,
  SocialLink,
  StatsSection,
  StatItem,
  StatNumber,
  StatTitle,
  CtaSection,
  CtaContent,
  CtaTitle,
  CtaButton
} from './styles';

const AboutPage: React.FC = () => {
  // Update title and meta description for SEO
  useEffect(() => {
    document.title = 'About Us | Orbit-Ops | Web Design, Graphic Design & Automation';
  }, []);

  return (
    <AboutContainer>
      <AboutHero>
        <AboutHeroContent>
          <h1>
            About Orbit-Ops
            <span className="terminal-text">_</span>
          </h1>
          <p>Get to know the team behind the digital solutions that elevate your business.</p>
        </AboutHeroContent>
      </AboutHero>

      <AboutSection>
        <div className="container">
          <AboutContent>
            <div>
              <h2>Our Story</h2>
              <p>
                Founded in 2020, Orbit-Ops began with a simple mission: to provide businesses with exceptional digital solutions that drive growth and innovation. What started as a small team of passionate tech enthusiasts has evolved into a comprehensive digital agency specializing in web design, graphic design, automation, and ongoing support services.
              </p>
              <p>
                Our name, Orbit-Ops, reflects our approach to business—we orbit around your needs, providing operational excellence that keeps your digital presence moving forward. Just as planets orbit stars in perfect harmony, we create digital ecosystems that harmoniously integrate with your business objectives.
              </p>
              <p>
                Today, we're proud to have collaborated with clients across various industries, from startups to established enterprises, helping them establish strong digital foundations and achieve their business goals.
              </p>
            </div>
            <AboutImage>
              <div className="image-placeholder">
                <i className="fas fa-rocket"></i>
              </div>
            </AboutImage>
          </AboutContent>
        </div>
      </AboutSection>

      <MissionSection>
        <div className="container">
          <h2>Our Mission & Values</h2>
          <MissionContent>
            <div>
              <p>
                At Orbit-Ops, our mission is to empower businesses through innovative digital solutions that enhance their online presence, streamline operations, and drive meaningful engagement with their audience. We believe in creating digital experiences that not only look fantastic but also deliver tangible results.
              </p>
            </div>
            <MissionList>
              <MissionItem>
                <i className="fas fa-star"></i>
                <div>
                  <h3>Excellence</h3>
                  <p>We are committed to delivering work of the highest quality in everything we do.</p>
                </div>
              </MissionItem>
              <MissionItem>
                <i className="fas fa-lightbulb"></i>
                <div>
                  <h3>Innovation</h3>
                  <p>We constantly explore new technologies and approaches to solve complex problems.</p>
                </div>
              </MissionItem>
              <MissionItem>
                <i className="fas fa-users"></i>
                <div>
                  <h3>Collaboration</h3>
                  <p>We work closely with our clients, treating their goals as our own.</p>
                </div>
              </MissionItem>
              <MissionItem>
                <i className="fas fa-shield-alt"></i>
                <div>
                  <h3>Integrity</h3>
                  <p>We maintain transparency and honesty in all our business relationships.</p>
                </div>
              </MissionItem>
            </MissionList>
          </MissionContent>
        </div>
      </MissionSection>

      <TeamSection>
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-description">
            The talented individuals behind Orbit-Ops who make digital magic happen every day.
          </p>
          <TeamGrid>
            <TeamMember>
              <TeamImage>
                <div className="image-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </TeamImage>
              <TeamInfo>
                <TeamName>Alex Johnson</TeamName>
                <TeamPosition>Founder & CEO</TeamPosition>
                <p>Alex leads our team with vision and strategic direction, ensuring we deliver exceptional results.</p>
                <TeamSocial>
                  <SocialLink href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </SocialLink>
                  <SocialLink href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </SocialLink>
                </TeamSocial>
              </TeamInfo>
            </TeamMember>

            <TeamMember>
              <TeamImage>
                <div className="image-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </TeamImage>
              <TeamInfo>
                <TeamName>Sarah Chen</TeamName>
                <TeamPosition>Creative Director</TeamPosition>
                <p>Sarah oversees our design process, bringing creativity and innovation to every project.</p>
                <TeamSocial>
                  <SocialLink href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </SocialLink>
                  <SocialLink href="#" aria-label="Dribbble">
                    <i className="fab fa-dribbble"></i>
                  </SocialLink>
                </TeamSocial>
              </TeamInfo>
            </TeamMember>

            <TeamMember>
              <TeamImage>
                <div className="image-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </TeamImage>
              <TeamInfo>
                <TeamName>Marcus Rodriguez</TeamName>
                <TeamPosition>Lead Developer</TeamPosition>
                <p>Marcus brings technical expertise to transform designs into functional, high-performance websites.</p>
                <TeamSocial>
                  <SocialLink href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </SocialLink>
                  <SocialLink href="#" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </SocialLink>
                </TeamSocial>
              </TeamInfo>
            </TeamMember>

            <TeamMember>
              <TeamImage>
                <div className="image-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </TeamImage>
              <TeamInfo>
                <TeamName>Olivia Taylor</TeamName>
                <TeamPosition>Automation Specialist</TeamPosition>
                <p>Olivia creates efficient automation solutions that streamline business operations for our clients.</p>
                <TeamSocial>
                  <SocialLink href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </SocialLink>
                  <SocialLink href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </SocialLink>
                </TeamSocial>
              </TeamInfo>
            </TeamMember>
          </TeamGrid>
        </div>
      </TeamSection>

      <StatsSection>
        <div className="container">
          <StatItem>
            <StatNumber>100+</StatNumber>
            <StatTitle>Clients Served</StatTitle>
          </StatItem>
          <StatItem>
            <StatNumber>200+</StatNumber>
            <StatTitle>Projects Completed</StatTitle>
          </StatItem>
          <StatItem>
            <StatNumber>5+</StatNumber>
            <StatTitle>Years of Experience</StatTitle>
          </StatItem>
          <StatItem>
            <StatNumber>15</StatNumber>
            <StatTitle>Industry Awards</StatTitle>
          </StatItem>
        </div>
      </StatsSection>

      <CtaSection>
        <div className="container">
          <CtaContent>
            <CtaTitle>Ready to work with us?</CtaTitle>
            <p>Let's discuss how we can help elevate your digital presence.</p>
            <CtaButton as={Link} to="/contact">
              Get in Touch
            </CtaButton>
          </CtaContent>
        </div>
      </CtaSection>
    </AboutContainer>
  );
};

export default AboutPage;