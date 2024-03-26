import React from 'react';
import Navigation from './main/Navigation';
import { Container } from '@mui/material'

function App() {
  return (
    <>
      <Container sx={{ bgcolor: '#f5f5f5' }}>
        <Navigation />
      </Container>
    </>
  );
}

export default App;
