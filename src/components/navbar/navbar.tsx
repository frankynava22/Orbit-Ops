import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  NavContainer, 
  NavInner, 
  Logo, 
  NavLinks, 
  NavLink, 
  MobileMenuButton, 
  MobileMenu 
} from './styled';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Change navbar styles on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavContainer isScrolled={isScrolled}>
      <NavInner>
        <Link to="/" onClick={closeMobileMenu}>
          <Logo>
            <span className="terminal-text">&lt;</span>
            <span>Orbit-Ops</span>
            <span className="terminal-text">/&gt;</span>
          </Logo>
        </Link>

        <NavLinks>
          <NavLink 
            to="/" 
            $isActive={location.pathname === '/'}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            $isActive={location.pathname === '/services'}
          >
            Services
          </NavLink>
          <NavLink 
            to="/about" 
            $isActive={location.pathname === '/about'}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            $isActive={location.pathname === '/contact'}
          >
            Contact
          </NavLink>
          <NavLink 
            to="/support" 
            $isActive={location.pathname === '/support'}
          >
            Support
          </NavLink>
        </NavLinks>

        <MobileMenuButton 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={isMobileMenuOpen ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </MobileMenuButton>

        <MobileMenu $isOpen={isMobileMenuOpen}>
          <NavLink 
            to="/" 
            $isActive={location.pathname === '/'}
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            $isActive={location.pathname === '/services'}
            onClick={closeMobileMenu}
          >
            Services
          </NavLink>
          <NavLink 
            to="/about" 
            $isActive={location.pathname === '/about'}
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            $isActive={location.pathname === '/contact'}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
          <NavLink 
            to="/support" 
            $isActive={location.pathname === '/support'}
            onClick={closeMobileMenu}
          >
            Support
          </NavLink>
        </MobileMenu>
      </NavInner>
    </NavContainer>
  );
};

export default Navbar;