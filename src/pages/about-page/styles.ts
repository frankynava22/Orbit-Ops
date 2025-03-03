import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding-top: 80px;
`;

export const AboutHero = styled.section`
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

export const AboutHeroContent = styled.div`
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

export const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  
  h2 {
    font-size: 2.25rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.accent};
    
    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, 
        ${({ theme }) => theme.colors.primary}, 
        ${({ theme }) => theme.colors.secondary}
      );
      margin-top: ${({ theme }) => theme.spacing.sm};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1.9rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1rem;
    }
  }
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const AboutImage = styled.div`
  height: 400px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  position: relative;
  
  .image-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.backgroundLight}, ${({ theme }) => theme.colors.background});
    display: flex;
    align-items: center;
    justify-content: center;
    
    i {
      font-size: 5rem;
      color: ${({ theme }) => theme.colors.primary};
      opacity: 0.5;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 300px;
  }
`;

export const MissionSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  
  h2 {
    font-size: 2.25rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    text-align: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1.9rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1rem;
    }
  }
`;

export const MissionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const MissionList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const MissionItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  i {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.accent};
  }
  
  p {
    margin: 0;
  }
`;

export const TeamSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  
  h2 {
    font-size: 2.25rem;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    text-align: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1.9rem;
    }
  }
  
  .section-description {
    text-align: center;
    max-width: 600px;
    margin: 0 auto ${({ theme }) => theme.spacing.xl};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.1rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1rem;
    }
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const TeamMember = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const TeamImage = styled.div`
  height: 240px;
  
  .image-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.background}, ${({ theme }) => theme.colors.backgroundLight});
    display: flex;
    align-items: center;
    justify-content: center;
    
    i {
      font-size: 4rem;
      color: ${({ theme }) => theme.colors.secondary};
      opacity: 0.5;
    }
  }
`;

export const TeamInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const TeamName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const TeamPosition = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 400;
`;

export const TeamSocial = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

export const StatsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: 1fr;
    }
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.terminal};
`;

export const StatTitle = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const CtaSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.background};
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
      radial-gradient(circle at 10% 10%, rgba(106, 13, 173, 0.1) 0%, transparent 300px),
      radial-gradient(circle at 90% 90%, rgba(147, 112, 219, 0.1) 0%, transparent 300px);
    z-index: 0;
  }
`;

export const CtaContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  
  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1.1rem;
    }
  }
`;

export const CtaTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const CtaButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;