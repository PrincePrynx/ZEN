import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('sad');
  const [thoughts, setThoughts] = useState([]);

  const addThought = (thought) => {
    setThoughts((prevThoughts) => [...prevThoughts, thought]);
  };

  return (
    <AppContext.Provider value={{ backgroundColor, setBackgroundColor, thoughts, addThought }}>
      <div style={{ backgroundColor }}>
        {children}
      </div>
    </AppContext.Provider>
  );
};
