import React, { useState } from 'react';

const Sidebar = ({ changeContent }) => {
  const [activeButton, setActiveButton] = useState('home');

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    changeContent(buttonName);
  };

  return (
    <div className="sidebar">
      <button
        className={activeButton === 'home' ? 'active' : ''}
        onClick={() => handleClick('home')}
      >
        Addition
      </button>
      <button
        className={activeButton === 'about' ? 'active' : ''}
        onClick={() => handleClick('about')}
      >
        Subtraction
      </button>
      <button
        className={activeButton === 'contact' ? 'active' : ''}
        onClick={() => handleClick('contact')}
      >
        Vocabulary
      </button>
    </div>
  );
};

export default Sidebar;