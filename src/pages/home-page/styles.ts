import styled, { css, keyframes } from 'styled-components';

interface HeroButtonProps {
  primary?: boolean;
}

// Keyframes animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Hero Section
export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(106, 13, 173, 0.1) 0%, transparent 400px),
      radial-gradient(circle at 80% 70%, rgba(147, 112, 219, 0.15) 0%, transparent 400px);
    z-index: -1;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 80px 0;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  text-align: center;
  animation: ${fadeIn} 1s ease forwards;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  .terminal-text {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  .blinking-cursor {
    color: ${({ theme }) => theme.colors.accent};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.9rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 80%;
    margin: ${({ theme }) => theme.spacing.xl} auto 0;
  }
`;

export const HeroButton = styled.button<HeroButtonProps>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-size: 1rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.primary ? css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      transform: translateY(-3px);
      box-shadow: ${({ theme }) => theme.shadows.medium};
    }
  ` : css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    
    &:hover {
      background-color: rgba(147, 112, 219, 0.1);
      transform: translateY(-3px);
      box-shadow: ${({ theme }) => theme.shadows.medium};
    }
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

// Services Section
export const ServicesSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.colors.primary}, 
      ${({ theme }) => theme.colors.secondary}
    );
  }
  
  .terminal-text {
    color: ${({ theme }) => theme.colors.primary};
    animation: blink 1s step-end infinite;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const ServiceBoxes = styled.div`
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

export const ServiceBox = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.colors.primary}, 
      ${({ theme }) => theme.colors.secondary}
    );
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  animation: ${float} 3s ease-in-out infinite;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const ServiceLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  
  i {
    margin-left: ${({ theme }) => theme.spacing.xs};
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    i {
      transform: translateX(5px);
    }
  }
`;

// Process Section
export const ProcessSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ProcessSteps = styled.div`
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

export const ProcessStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ProcessNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  opacity: 0.7;
  font-family: ${({ theme }) => theme.fonts.terminal};
`;

export const ProcessContent = styled.div``;

export const ProcessTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.accent};
`;

// Testimonials Section
export const TestimonialsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const TestimonialSlider = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Testimonial = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  
  &:before {
    content: '"';
    position: absolute;
    top: ${({ theme }) => theme.spacing.sm};
    left: ${({ theme }) => theme.spacing.md};
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.2;
    font-family: serif;
    line-height: 1;
  }
`;

export const TestimonialContent = styled.p`
  font-style: italic;
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  z-index: 1;
`;

export const TestimonialAuthor = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  text-align: right;
`;

// CTA Section
export const CTASection = styled.section`
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

export const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  .terminal-text {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.75rem;
  }
`;

export const CTAButtons = styled(HeroButtons)`
  margin-top: 0;
`;