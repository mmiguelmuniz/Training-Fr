import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import Footer from './components/footer';
import BodyPart1 from './components/Body1 ';
import BodyPart2 from './components/Body2 ';
import FormPage from './pages/agendamento';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <BodyPart1 />     
          </> 
        } />
        <Route path="/agendamento" element={<FormPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
