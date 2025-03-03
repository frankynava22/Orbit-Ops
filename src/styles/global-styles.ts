import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

// Note: The font import should be moved to index.html instead of using @import in styled-components

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(106, 13, 173, 0.1) 0%, transparent 300px),
      radial-gradient(circle at 80% 70%, rgba(147, 112, 219, 0.1) 0%, transparent 300px);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color ${theme.animations.fast} ease;
    
    &:hover {
      color: ${theme.colors.accent};
    }
  }

  button {
    font-family: ${theme.fonts.main};
    cursor: pointer;
    border: none;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: ${theme.spacing.md};
  }

  h1 {
    font-size: 2.5rem;
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 1.375rem;
    }
  }

  p {
    margin-bottom: ${theme.spacing.md};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  section {
    padding: ${theme.spacing.xxl} 0;
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing.xl} 0;
    }
  }

  .container {
    width: 100%;
    max-width: ${theme.container.maxWidth};
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
  }

  .terminal-text {
    font-family: ${theme.fonts.terminal};
    color: ${theme.colors.accent};
  }
  
  .blinking-cursor {
    animation: blink 1s step-end infinite;
  }
  
  @keyframes blink {
    from, to {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

export default GlobalStyle;