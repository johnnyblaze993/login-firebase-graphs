import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './pages/Navbar';
import AnimatedRoutes from './pages/AnimatedRoutes';

import React from 'react';
import { Container } from '@mui/material';
import { useState } from 'react';

const App = () => {
  const [country, setCountry] = useState('');
  const [chosenCountry, setChosenCountry] = useState('');
  return (
    <>
      {' '}
      <Router>
        <Navbar />
        <Container
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AnimatedRoutes
            country={country}
            setCountry={setCountry}
            chosenCountry={chosenCountry}
            setChosenCountry={setChosenCountry}
          />
        </Container>
      </Router>
    </>
  );
};

export default App;
