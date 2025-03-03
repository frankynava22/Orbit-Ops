import React, { useState, useEffect } from 'react';
import { TerminalBody, TerminalContainer, TerminalHeader, TerminalLine } from './styled';

interface TerminalLine {
  text: string;
  delay: number;
}

interface TerminalProps {
  lines: TerminalLine[];
}

const Terminal: React.FC<TerminalProps> = ({ lines }) => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    let currentDelay = 0;
    
    lines.forEach((line, index) => {
      currentDelay += line.delay;
      
      const timeout = setTimeout(() => {
        setVisibleLines(prev => [...prev, line.text]);
        
        if (index === lines.length - 1) {
          setIsTyping(false);
        }
      }, currentDelay);
      
      return () => clearTimeout(timeout);
    });
  }, [lines]);

  return (
    <TerminalContainer>
      <TerminalHeader>
        <div className="terminal-controls">
          <span className="control close"></span>
          <span className="control minimize"></span>
          <span className="control maximize"></span>
        </div>
        <div className="terminal-title">orbit-ops-terminal</div>
      </TerminalHeader>
      <TerminalBody>
        {visibleLines.map((line, index) => (
          <TerminalLine key={index}>{line}</TerminalLine>
        ))}
        {isTyping && <TerminalLine className="typing-line"><span className="blinking-cursor">_</span></TerminalLine>}
      </TerminalBody>
    </TerminalContainer>
  );
};

export default Terminal;