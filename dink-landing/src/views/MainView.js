import logo from "../assets/logo.svg";
import dinkLogo from "../assets/dinkLogo.svg";
import MenuBar from "../components/MenuBar";
import myVideo from "../assets/pickleball.mov";
import pickleball from "../assets/logo.svg";
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import FadeInSection from "../components/FadeInSection.js";
import { Alignment } from "../enum/alignment.ts";
import Footer from "../components/Footer.js";

const MainView = (props) => {
  return (
    <div>
      <video autoPlay loop muted className="Looped-video" style={{ top: 0 }}>
        <source src={myVideo} type="video/mp4"></source>
      </video>
      <MenuBar />
      <img src={logo} className="App-logo" alt="logo" />
      <Grid container justifyContent='center' spacing={2}>
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
          message={
            <Typography>
              We saw a need for a way to find new partners, find new courts, and
              find new ways to play...
            </Typography>
          }
        />
        <FadeInSection
          alignment={Alignment.RIGHT}
          message={
            <Typography>
              So we built <img src={dinkLogo} alt="dinkilicious" />
            </Typography>
          }
        />
        <FadeInSection
          alignment={Alignment.CENTER}
          message={<Typography>Join us and sign up for our Beta!</Typography>}
        />
        <FadeInSection
          alignment={Alignment.CENTER}
          message={
            <Box>
              <TextField variant="outlined">Email</TextField>
              <Button startIcon={<Avatar src={pickleball} />}>Submit!</Button>
            </Box>
          }
        />
      </Grid>

      <Footer />
    </div>
  );
};

export default MainView;
