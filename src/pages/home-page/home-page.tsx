import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  HeroButton,
  ServicesSection,
  SectionTitle,
  ServiceBoxes,
  ServiceBox,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServiceLink,
  ProcessSection,
  ProcessSteps,
  ProcessStep,
  ProcessNumber,
  ProcessContent,
  ProcessTitle,
  TestimonialsSection,
  TestimonialSlider,
  Testimonial,
  TestimonialContent,
  TestimonialAuthor,
  CTASection,
  CTAContent,
  CTATitle,
  CTAButtons
} from './styles';
import Terminal from '../../components/terminal/terminal';

const HomePage: React.FC = () => {
  // Update title and meta description for SEO
  useEffect(() => {
    document.title = 'Orbit-Ops | Web Design, Graphic Design & Automation Solutions';
  }, []);

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            <span className="terminal-text">$ </span>
            Innovative Solutions for Your Digital Orbit
            <span className="blinking-cursor">_</span>
          </HeroTitle>
          <HeroSubtitle>
            Web Design • Graphic Design • Automation • Support
          </HeroSubtitle>
          <Terminal 
            lines={[
              { text: '> Initializing Orbit-Ops systems...', delay: 500 },
              { text: '> Loading digital solutions...', delay: 1000 },
              { text: '> Web design module: Active', delay: 1500 },
              { text: '> Graphic design module: Active', delay: 2000 },
              { text: '> Automation services: Active', delay: 2500 },
              { text: '> Support systems: Active', delay: 3000 },
              { text: '> Welcome to <Orbit-Ops/>', delay: 3500 }
            ]}
          />
          <HeroButtons>
            <HeroButton as={Link} to="/services" primary>
              Explore Services
            </HeroButton>
            <HeroButton as={Link} to="/contact">
              Contact Us
            </HeroButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <ServicesSection id="services">
        <div className="container">
          <SectionTitle>
            Our Services
            <span className="terminal-text">_</span>
          </SectionTitle>
          
          <ServiceBoxes>
            <ServiceBox>
              <ServiceIcon>
                <i className="fas fa-paint-brush"></i>
              </ServiceIcon>
              <ServiceTitle>Graphic Design</ServiceTitle>
              <ServiceDescription>
                Eye-catching visuals, logos, and marketing materials that strengthen
                your brand identity and communication.
              </ServiceDescription>
              <ServiceLink as={Link} to="/services#graphic-design">
                Learn More <i className="fas fa-arrow-right"></i>
              </ServiceLink>
            </ServiceBox>
            
            <ServiceBox>
              <ServiceIcon>
                <i className="fas fa-robot"></i>
              </ServiceIcon>
              <ServiceTitle>Automation</ServiceTitle>
              <ServiceDescription>
                Custom automation solutions to streamline your workflows,
                reduce manual tasks, and increase efficiency.
              </ServiceDescription>
              <ServiceLink as={Link} to="/services#automation">
                Learn More <i className="fas fa-arrow-right"></i>
              </ServiceLink>
            </ServiceBox>
            
            <ServiceBox>
              <ServiceIcon>
                <i className="fas fa-headset"></i>
              </ServiceIcon>
              <ServiceTitle>Support</ServiceTitle>
              <ServiceDescription>
                Dedicated customer support and maintenance services for
                your existing digital solutions.
              </ServiceDescription>
              <ServiceLink as={Link} to="/support">
                Learn More <i className="fas fa-arrow-right"></i>
              </ServiceLink>
            </ServiceBox>
          </ServiceBoxes>
        </div>
      </ServicesSection>

      <ProcessSection>
        <div className="container">
          <SectionTitle>
            Our Process
            <span className="terminal-text">_</span>
          </SectionTitle>
          
          <ProcessSteps>
            <ProcessStep>
              <ProcessNumber>01</ProcessNumber>
              <ProcessContent>
                <ProcessTitle>Discovery</ProcessTitle>
                <p>We begin by understanding your business, goals, and requirements through in-depth consultations.</p>
              </ProcessContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessNumber>02</ProcessNumber>
              <ProcessContent>
                <ProcessTitle>Strategy</ProcessTitle>
                <p>Develop a comprehensive strategy and roadmap tailored to meet your specific objectives.</p>
              </ProcessContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessNumber>03</ProcessNumber>
              <ProcessContent>
                <ProcessTitle>Design & Development</ProcessTitle>
                <p>Create and build your solution with attention to detail, user experience, and technical excellence.</p>
              </ProcessContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessNumber>04</ProcessNumber>
              <ProcessContent>
                <ProcessTitle>Launch & Support</ProcessTitle>
                <p>Deploy your solution with thorough testing and provide ongoing support to ensure continued success.</p>
              </ProcessContent>
            </ProcessStep>
          </ProcessSteps>
        </div>
      </ProcessSection>

      <TestimonialsSection>
        <div className="container">
          <SectionTitle>
            Client Testimonials
            <span className="terminal-text">_</span>
          </SectionTitle>
          
          <TestimonialSlider>
            <Testimonial>
              <TestimonialContent>
                "Orbit-Ops transformed our online presence with a stunning website that perfectly captures our brand. Their attention to detail and responsive service exceeded our expectations."
              </TestimonialContent>
              <TestimonialAuthor>
                - Sarah Johnson, CEO of TechNova
              </TestimonialAuthor>
            </Testimonial>
            
            <Testimonial>
              <TestimonialContent>
                "The automation solutions provided by Orbit-Ops have saved us countless hours and significantly improved our workflow efficiency. Highly recommended!"
              </TestimonialContent>
              <TestimonialAuthor>
                - Michael Thompson, Operations Manager at DataFlow
              </TestimonialAuthor>
            </Testimonial>
            
            <Testimonial>
              <TestimonialContent>
                "Working with Orbit-Ops on our rebrand was a game-changer. Their graphic design team created a cohesive visual identity that has received tremendous positive feedback."
              </TestimonialContent>
              <TestimonialAuthor>
                - Alex Rivera, Marketing Director at FutureSpace
              </TestimonialAuthor>
            </Testimonial>
          </TestimonialSlider>
        </div>
      </TestimonialsSection>

      <CTASection>
        <div className="container">
          <CTAContent>
            <CTATitle>
              Ready to launch your project into orbit?
              <span className="terminal-text">_</span>
            </CTATitle>
            <CTAButtons>
              <HeroButton as={Link} to="/contact" primary>
                Get Started
              </HeroButton>
              <HeroButton as={Link} to="/services">
                View Services
              </HeroButton>
            </CTAButtons>
          </CTAContent>
        </div>
      </CTASection>
    </>
  );
};

export default HomePage;
    