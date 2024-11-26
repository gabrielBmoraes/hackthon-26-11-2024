import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage';
import Teste from './components/Formulario';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/formulario" element={<Teste />} />
      </Routes>
    </Router>

  );
};

export default App;