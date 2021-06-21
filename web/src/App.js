import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';
import HomeNavigation from './components/Home/HomeNavigation';
import { BrowserRouter } from 'react-router-dom';
import { MainFrame } from './components/routes';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <HomeNavigation />
          <MainFrame />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
