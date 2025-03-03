import styled from 'styled-components';

interface FormInputProps {
  $hasError?: boolean;
}

export const ContactContainer = styled.div`
  padding-top: 80px;
`;

export const ContactHeader = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  text-align: center;
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
  
  h1 {
    font-size: 3rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    position: relative;
    z-index: 1;
    
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
    position: relative;
    z-index: 1;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1.1rem;
    }
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  .success-message {
    text-align: center;
    padding: ${({ theme }) => theme.spacing.xl} 0;
    
    i {
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.success};
      margin-bottom: ${({ theme }) => theme.spacing.md};
    }
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: ${({ theme }) => theme.spacing.md};
    }
    
    p {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

export const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ContactTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.accent};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

export const ContactDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 1rem;
  line-height: 1.6;
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 500;
  
  .required {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const FormInput = styled.input<FormInputProps>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme, $hasError }) => 
    $hasError ? theme.colors.error : 'rgba(255, 255, 255, 0.2)'};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.colors.error : theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme, $hasError }) => 
      $hasError ? 'rgba(244, 67, 54, 0.2)' : 'rgba(147, 112, 219, 0.2)'};
  }
`;

export const FormTextarea = styled.textarea<FormInputProps>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme, $hasError }) => 
    $hasError ? theme.colors.error : 'rgba(255, 255, 255, 0.2)'};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.colors.error : theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme, $hasError }) => 
      $hasError ? 'rgba(244, 67, 54, 0.2)' : 'rgba(147, 112, 219, 0.2)'};
  }
`;

export const FormSelect = styled.select<FormInputProps>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme, $hasError }) => 
    $hasError ? theme.colors.error : 'rgba(255, 255, 255, 0.2)'};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;
  padding-right: 30px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.colors.error : theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme, $hasError }) => 
      $hasError ? 'rgba(244, 67, 54, 0.2)' : 'rgba(147, 112, 219, 0.2)'};
  }
`;

export const FormButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  
  i {
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
  
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const FormError = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.85rem;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const InfoItem = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  &:last-of-type {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(106, 13, 173, 0.2);
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing.md};
  
  i {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
  }
`;

export const InfoText = styled.div`
  flex: 1;
`;

export const InfoTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const ContactMap = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  .map-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.textSecondary};
    
    i {
      font-size: 3rem;
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;