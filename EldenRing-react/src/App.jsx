import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import CreatureList from './components/CreatureList';

function App() {
  return (
    <Router>
      <Routes> {}
        <Route path="/" element={<CreatureList />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
