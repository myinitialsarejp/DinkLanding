import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import MainView from './views/MainView.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutView from './views/AboutView.js';


function App() {

  const theme = createTheme({
    typography:{
      fontFamily: 'BlackBubbles-Regular'
    }
  })
  return (
    <Router>
    <div className="App">
      <ThemeProvider theme={theme}>
      <header className="App-header">
      <Routes>
          <Route path="/about" element={<AboutView />} />
          <Route path="/" element={<MainView />} />
        </Routes>
      </header>
      </ThemeProvider>
    </div>
    </Router>
  );
}

export default App;
