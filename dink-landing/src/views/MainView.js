import dinkLogo from "../assets/dinkLogo.svg";
import { Grid, Typography } from "@mui/material";
import FadeInSection from "../components/FadeInSection.js";
import { Alignment } from "../enum/alignment.ts";
import Footer from "../components/Footer.js";
import SignUpSection from "../components/SignUpSection.js";
import VideoLogo from "../components/VideoLogo.js";
import MenuDrawer from "../components/MenuDrawer.js";
import EmailConfirmation from "../components/EmailConfirmation.js";
import { useState } from "react";

const MainView = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleConfirmation = () => {
    showConfirmation ? setShowConfirmation(false) : setShowConfirmation(true)
  }

  return (
    <div>
      <VideoLogo />
      <MenuDrawer />
      <EmailConfirmation isOpen={showConfirmation} setIsOpen={setShowConfirmation}/>
      {/*<MenuBar />*/}
      <Grid
        sx={{padding: "5%" }}
        alignItems="center"
        container
        justifyContent="center"
        spacing={2}
      >
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
              We saw a need for a way to find new partners, new courts, and new
              ways to play...
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
              <SignUpSection toggleConfirmation={toggleConfirmation}/>
            </>
          }
        />
      </Grid>

      <Footer />
    </div>
  );
};

export default MainView;
