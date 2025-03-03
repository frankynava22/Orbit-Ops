import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEOHelmet: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Base website data
  const baseUrl = 'https://orbit-ops.com';
  const siteName = 'Orbit-Ops';
  const defaultTitle = 'Orbit-Ops | Web Design, Graphic Design & Automation Solutions';
  const defaultDescription = 'Professional web design, graphic design, automation, and support services to elevate your digital presence and streamline your business operations.';
  
  // Generate dynamic SEO data based on current path
  let title = defaultTitle;
  let description = defaultDescription;
  let canonical = `${baseUrl}${currentPath}`;
  
  // Set page-specific SEO data
  switch (currentPath) {
    case '/services':
      title = 'Our Services | Orbit-Ops';
      description = 'Explore our professional web design, graphic design, automation, and support services tailored to help your business succeed online.';
      break;
    
    case '/about':
      title = 'About Us | Orbit-Ops';
      description = 'Learn about the team behind Orbit-Ops and our mission to provide exceptional digital solutions for businesses of all sizes.';
      break;
    
    case '/contact':
      title = 'Contact Us | Orbit-Ops';
      description = 'Get in touch with our team to discuss your project requirements or request a quote for our web design and digital services.';
      break;
    
    case '/support':
      title = 'Customer Support | Orbit-Ops';
      description = 'Dedicated support services for existing clients, including website maintenance, troubleshooting, and technical assistance.';
      break;
    
    default:
      // Homepage or unknown routes use the defaults
      break;
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* OpenGraph Meta Tags (for social sharing) */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/twitter-image.jpg`} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="web design, graphic design, automation, business solutions, digital agency, professional website, tech company, support services" />
      
      {/* Font Awesome for Icons */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />
    </Helmet>
  );
};

export default SEOHelmet;