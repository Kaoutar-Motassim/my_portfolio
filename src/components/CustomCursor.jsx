import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (e.target.matches('button, a, .interactive')) {
        setIsHovering(true);
        const text = e.target.getAttribute('data-cursor-text');
        if (text) setCursorText(text);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches('button, a, .interactive')) {
        setIsHovering(false);
        setCursorText('');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`cursor ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      
      {/* Cursor text */}
      <div
        className={`cursor-text ${cursorText ? 'visible' : ''}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      >
        {cursorText}
      </div>
    </>
  );
}
