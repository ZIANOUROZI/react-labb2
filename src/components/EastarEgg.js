import React, { useState, useEffect } from 'react';

const EasterEgg = () => {
  const [inputBuffer, setInputBuffer] = useState('');
  const secretCode = '1337';

  useEffect(() => {
    const handleKeyDown = (event) => {
      setInputBuffer(prevBuffer => prevBuffer + event.key);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (inputBuffer.includes(secretCode)) {
      alert('Du är underbart lärare Reidra Nilsen!');
      setInputBuffer('');
    }
  }, [inputBuffer]);

  return (
    <div className='påskägg-container'>
      <h1 className='påskägg'>Påskägg</h1>
      <p className='beskrivning'>Skriv in kombinationen "1337" för att se det roliga meddelandet!</p>
    </div>
  );
};

export default EasterEgg;