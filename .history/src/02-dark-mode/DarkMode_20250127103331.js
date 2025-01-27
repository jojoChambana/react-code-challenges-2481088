import React, { useState } from 'react';
/*
  when the button with the className dark-mode-button is clicked, the page should be displayed in dark mode

  when the button with the className light-mode-button is clicked, the page should be displayed without dark mode
*/

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(true);
  };
  return (
    <div className={`page ${darkMode ? "dark-mode" : ""}`}>
      <button className='dark-mode-button' onClick={handleDarkMode}>Dark Mode</button>
      <button className='light-mode-button' onClick={handleDarkMode}>Light Mode</button>
    </div>
  )
}
