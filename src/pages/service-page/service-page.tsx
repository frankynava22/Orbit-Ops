import React, { useEffect } from 'react';
import {
  ServicePageContainer,
  ServiceHero,
  ServiceHeroContent,
  ServiceList,
  ServiceItem,
  ServiceIcon,
  ServiceContent,
  ServiceTitle,
  ServiceDescription,
  ServiceFeatures,
  ServiceFeature,
  ServiceCTA,
  ServiceButton
} from './styles';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  // Update title and meta description for SEO
  useEffect(() => {
    document.title = 'Services | Orbit-Ops | Web Design, Graphic Design & Automation';
  }, []);

  return (
    <ServicePageContainer>
      <ServiceHero>
        <ServiceHeroContent>
          <h1>
            Our Services
            <span className="terminal-text">_</span>
          </h1>
          <p>Explore our comprehensive range of digital solutions designed to elevate your business</p>
        </ServiceHeroContent>
      </ServiceHero>

      <ServiceList>
        <ServiceItem id="web-design">
          <ServiceIcon>
            <i className="fas fa-laptop-code"></i>
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>Web Design</ServiceTitle>
            <ServiceDescription>
              Our web design services focus on creating visually stunning, responsive, and user-friendly websites that effectively represent your brand and engage your audience. We combine modern aesthetics with technical excellence to deliver websites that not only look great but also perform exceptionally well.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Responsive design for all devices</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>SEO-optimized architecture</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Custom UI/UX design</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Content management systems</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>E-commerce integration</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Performance optimization</span>
              </ServiceFeature>
            </ServiceFeatures>
            <ServiceCTA>
              <ServiceButton as={Link} to="/contact">
                Request a Quote
              </ServiceButton>
            </ServiceCTA>
          </ServiceContent>
        </ServiceItem>

        <ServiceItem id="graphic-design">
          <ServiceIcon>
            <i className="fas fa-paint-brush"></i>
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>Graphic Design</ServiceTitle>
            <ServiceDescription>
              Our graphic design services help you establish a strong visual identity and create compelling marketing materials. From logos to full brand packages, we craft unique visuals that resonate with your target audience and strengthen your brand recognition.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Logo design & branding</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Print materials (business cards, brochures)</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Social media graphics</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Banner ads & digital marketing assets</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Infographics & data visualization</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>UI elements & icons</span>
              </ServiceFeature>
            </ServiceFeatures>
            <ServiceCTA>
              <ServiceButton as={Link} to="/contact">
                Request a Quote
              </ServiceButton>
            </ServiceCTA>
          </ServiceContent>
        </ServiceItem>

        <ServiceItem id="automation">
          <ServiceIcon>
            <i className="fas fa-robot"></i>
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>Automation</ServiceTitle>
            <ServiceDescription>
              Our automation services help businesses streamline repetitive tasks, reduce manual work, and increase overall efficiency. We create custom automation solutions tailored to your specific workflow needs, leveraging the latest technologies to save you time and resources.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Workflow automation</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Data integration & synchronization</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Custom scripts & macros</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>API development & integration</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Scheduled task management</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Business process optimization</span>
              </ServiceFeature>
            </ServiceFeatures>
            <ServiceCTA>
              <ServiceButton as={Link} to="/contact">
                Request a Quote
              </ServiceButton>
            </ServiceCTA>
          </ServiceContent>
        </ServiceItem>

        <ServiceItem id="support">
          <ServiceIcon>
            <i className="fas fa-headset"></i>
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>Support</ServiceTitle>
            <ServiceDescription>
              Our dedicated support services ensure your digital solutions continue to perform optimally. We provide ongoing maintenance, troubleshooting, and technical support to address any issues promptly and keep your systems running smoothly.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Website maintenance & updates</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Performance monitoring</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Security audits & updates</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Content updates & management</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Technical troubleshooting</span>
              </ServiceFeature>
              <ServiceFeature>
                <i className="fas fa-check-circle"></i>
                <span>Training & documentation</span>
              </ServiceFeature>
            </ServiceFeatures>
            <ServiceCTA>
              <ServiceButton as={Link} to="/contact">
                Request Support
              </ServiceButton>
            </ServiceCTA>
          </ServiceContent>
        </ServiceItem>
      </ServiceList>
    </ServicePageContainer>
  );
};

export default ServicesPage;