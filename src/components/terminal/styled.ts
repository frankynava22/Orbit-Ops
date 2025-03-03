import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const TerminalContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.large};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const TerminalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  .terminal-controls {
    display: flex;
    gap: 8px;
    
    .control {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: block;
    }
    
    .close {
      background-color: #ff5f56;
    }
    
    .minimize {
      background-color: #ffbd2e;
    }
    
    .maximize {
      background-color: #27c93f;
    }
  }
  
  .terminal-title {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.fonts.terminal};
  }
`;

export const TerminalBody = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.terminal};
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  min-height: 200px;
  max-height: 300px;
  overflow-y: auto;
  
  .typing-line {
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.15em solid ${({ theme }) => theme.colors.accent};
    animation: ${typing} 1s steps(20, end);
  }
`;

export const TerminalLine = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`;