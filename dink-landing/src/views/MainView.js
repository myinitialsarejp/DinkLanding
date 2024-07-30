import logo from "../assets/logo.svg";
import dinkLogo from "../assets/dinkLogo_light.svg";
import MenuBar from "../components/MenuBar";
import myVideo from "../assets/pickleball.mov";
import {
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import FadeInSection from "../components/FadeInSection.js";
import { Alignment } from "../enum/alignment.ts";
import Footer from "../components/Footer.js";
import SignUpSection from "../components/SignUpSection.js";

const MainView = (props) => {
  return (
    <div>
      <video autoPlay loop muted className="Looped-video" style={{ top: 0 }}>
        <source src={myVideo} type="video/mp4"></source>
      </video>
      <MenuBar />
      <Grid sx={{padding: '5%'}} alignItems='center' container justifyContent="center" spacing={2}>
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
          message={
            <>
              {/* <Typography>Join us and sign up for our Beta!</Typography>
              <Box display="flex" justifyContent="center">
                <TextField
                  sx={{ input: {color: ColorCode.RynFlesh}}}
                  defaultValue="Email"
                  margin="dense"
                  variant="outlined"
                ></TextField>
                <Button sx={{ backgroundColor: ColorCode.StormGreen, ml:'20px'}} size='large' variant='contained'>Submit!</Button>
              </Box> */}
              <SignUpSection />
            </>
          }
        />
      </Grid>

      <Footer />
    </div>
  );
};

export default MainView;
