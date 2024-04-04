import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConversationIntelligence from './pages/ConversationIntelligence';
import About from './pages/About';
import LandingPage from './pages/LandingPage'; 
import CareerPage from './pages/CareerPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/conversational-intelligence/" element={<ConversationIntelligence />} />
      <Route path="/career/" element={<CareerPage/>} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
