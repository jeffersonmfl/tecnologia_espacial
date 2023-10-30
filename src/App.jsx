import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import ListaCarros from './pages/listaFoguetes';
import {Container,Button,lightTheme,darkTheme} from './Styles/styles'
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Cep from './pages/cep';

function App() {
  const[theme,setTheme] = useState('light')

  const mudarTheme = () => {
    setTheme(mudar => mudar === 'light' ? 'dark' : 'light')
  }

  return (
    <>
    <Button onClick={mudarTheme}><img src="./brilho-do-sol.png" alt="" width={20} height={20} /></Button>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <h1>Evolução da tecnologia espacial</h1>
      <hr/>
      <Container>
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/listafoguetes' element={<ListaCarros />} />
              <Route path='/cep' element={<Cep/>} />
        </Routes>
      </BrowserRouter>
      </Container>
      </ThemeProvider>
      </>
  );
}

export default App;

