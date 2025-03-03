import styled from 'styled-components';

export const ServicePageContainer = styled.div`
  padding-top: 80px;
`;

export const ServiceHero = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(106, 13, 173, 0.1) 0%, transparent 400px),
      radial-gradient(circle at 80% 70%, rgba(147, 112, 219, 0.1) 0%, transparent 400px);
    z-index: 0;
  }
`;

export const ServiceHeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
  position: relative;
  z-index: 1;
  
  h1 {
    font-size: 3rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    
    .terminal-text {
      color: ${({ theme }) => theme.colors.primary};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    max-width: 600px;
    margin: 0 auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1.1rem;
    }
  }
`;

export const ServiceList = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }
`;

export const ServiceItem = styled.section`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }
  
  /* Add extra space for anchor links */
  scroll-margin-top: 100px;
`;

export const ServiceIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const ServiceContent = styled.div``;

export const ServiceTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.accent};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.75rem;
  }
`;

export const ServiceDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const ServiceFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceFeature = styled.div`
  display: flex;
  align-items: center;
  
  i {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
  
  span {
    font-size: 1rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

export const ServiceCTA = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
  }
`;

export const ServiceButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-size: 1rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;