import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import ListaCarros from './pages/listaFoguetes';
import { Container, Button, lightTheme, darkTheme } from './Styles/styles';
import { ThemeProvider } from 'styled-components';
import Cep from './pages/cep';

function App() {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Button onClick={toggleTheme}>
        <img src="./brilho-do-sol.png" alt="" width={20} height={20} />
      </Button>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <h1>Evolução da tecnologia espacial</h1>
        <hr />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/listafoguetes' element={<ListaCarros />} />
              <Route path='/cep' element={<Cep />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;