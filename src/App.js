import React from 'react';
import './App.css';
import Canvas from './components/Canvas'
import HeadShot from './components/HeadShot'
import Card from './components/Card'


function App() {
  return (
    <div className="App">
      <Canvas/>
       <HeadShot/>
       <Card/>
       <Card/>
       <Card/>
    </div>
  );
}

export default App;
