import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Aarush.', 'Programmer.', 'CS + DS @ Emory.', 'Movie Buff.', 'Tech Enthusiast.'],
      typeSpeed: 75,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div style={{ fontSize: '5rem', color: 'white', textAlign: 'center' }}>
      <span ref={el} />
    </div>
  );
};

export default TypingAnimation;
