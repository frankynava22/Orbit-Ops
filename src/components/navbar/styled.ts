import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface NavContainerProps {
  isScrolled: boolean;
}

interface NavLinkProps {
  $isActive: boolean;
}

interface MobileMenuProps {
  $isOpen: boolean;
}

export const NavContainer = styled.nav<NavContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme, isScrolled }) => 
    isScrolled ? theme.colors.background : 'transparent'};
  backdrop-filter: ${({ isScrolled }) => 
    isScrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ theme, isScrolled }) => 
    isScrolled ? theme.shadows.medium : 'none'};
  padding: ${({ theme, isScrolled }) => 
    isScrolled ? `${theme.spacing.sm} 0` : `${theme.spacing.md} 0`};
`;

export const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const Logo = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  
  .terminal-text {
    color: ${({ theme }) => theme.colors.primary};
    margin: 0 2px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavLink = styled(Link)<NavLinkProps>`
  position: relative;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.accent : theme.colors.text};
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    
    &:after {
      width: 100%;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  width: 40px;
  height: 40px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  > div {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    span {
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.text};
      margin: 3px 0;
      transition: all 0.3s ease;
    }
    
    &.open {
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      
      span:nth-child(2) {
        opacity: 0;
      }
      
      span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'all' : 'none')};
  transition: all 0.4s ease;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;