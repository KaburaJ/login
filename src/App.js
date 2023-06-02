//dark and light mode

import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const[lightMode, setLightMode] = useState(true);

  const toggleMode = () => {
    setLightMode(!lightMode)
  }
  return (
    <div className= {lightMode? 'lightMode': 'darkMode'}>
      <button
      onClick={toggleMode}
      className='toggle'
      >Toggle Mode</button>
      <LoginForm />
    </div>
  );
}

export default App;
