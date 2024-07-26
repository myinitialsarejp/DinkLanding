import logo from './assets/logo.svg';
import dinkLogo from './assets/dinkLogo.svg'
import CopyrightIcon from '@mui/icons-material/Copyright';
import './App.css';
import MenuBar from './components/MenuBar';
import myVideo from './assets/pickleball.mov'
import pickleball from './assets/logo.svg'
import { Avatar, Box, Button, createTheme, Paper, TextField, ThemeProvider, Typography } from '@mui/material';
import { ColorCode } from './enum/colorCodes.ts';
import FadeInSection from './components/FadeInSection.js';
import { Alignment } from './enum/alignment.ts';


function App() {

  const theme = createTheme({
    typography:{
      fontFamily: 'BlackBubbles-Regular'
    }
  })
  return (

    <div className="App">
      <ThemeProvider theme={theme}>
      <header className="App-header">
      <video autoPlay loop muted className='Looped-video' style={{top:0}}>
          <source src={myVideo} type="video/mp4"></source>
        </video>
        <MenuBar />
        <img src={logo} className="App-logo" alt="logo" />
        <FadeInSection 
          alignment={Alignment.LEFT}
          message={<Typography>We play pickleball...</Typography>}
        />
        
        <FadeInSection 
          alignment={Alignment.RIGHT}
          message={<Typography>...but not as much as we'd like to.</Typography>}
        />
        <FadeInSection 
          alignment={Alignment.LEFT}
          message={<Typography>We saw a need for a way to find new partners, find new courts, and find new ways to play...</Typography>}
         />
        <FadeInSection 
          alignment={Alignment.RIGHT}
          message={<Typography>So we built <img src={dinkLogo} alt="dinkilicious"/></Typography>}
        />
        <FadeInSection
          alignment={Alignment.CENTER}
          message={<Typography>Join us and sign up for our Beta!</Typography>}
        />
        <FadeInSection 
          alignment={Alignment.CENTER}
          message={(
          <Box
            display='flex'
            sx={{display:'flex', flexDirection:'row'}}
          >
            <TextField variant='outlined'>Email address</TextField>
            <Button startIcon={<Avatar src={pickleball} />} />
          </Box>)}
        /> 
        <Paper sx={{backgroundColor:ColorCode.BlueCuracao, width:'100%'}}>
          <Box sx={{display:'flex', flexDirection:'row', textAlign:'center'}}>
              <CopyrightIcon />
              <Typography>Dink,Inc</Typography>
          </Box>
          <Typography>
            7701 Pineville-Matthews Rd, Charlotte, NC 28226
          </Typography>
        </Paper>
        
      </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
