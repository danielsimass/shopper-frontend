import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/footer';
import { Routes } from './routes';
import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
