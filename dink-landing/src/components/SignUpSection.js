import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ColorCode } from "../enum/colorCodes.ts";
import { Paper, styled } from "@mui/material";
import { ConnectToMongo } from "../api/MongoAPI.js";

export default function SignUpSection(props) {
  const content = {
    header: "Join us and Sign Up for our Beta!",
    "01_primary-action": "Sign up",
    ...props.content,
  };
  const toggleConfirmation = props.toggleConfirmation

  const StyledTextField = styled(TextField)({
    input: {
      color: ColorCode.StormGreen,
      fontFamily: "Lato",
    },
    label: {
      color: ColorCode.StormGreen,
      fontFamily: "Lato",
    },
    color: ColorCode.StormGreen,
    fontFamily: "Lato",
  });

  const onSubmit = (event) =>{
    event.preventDefault();
    toggleConfirmation()
  }

  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Typography>{content["header"]}</Typography>
          </Box>
          <Box>
            <form noValidate onSubmit={onSubmit}>
              <Paper elevation={12} sx={{ padding: "10%", fontSize: "16px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      className="Signup-text"
                      variant="outlined"
                      required
                      fullWidth
                      autoComplete="fname"
                      name="firstName"
                      id="firstName"
                      label="First name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      className="Signup-text"
                      variant="outlined"
                      required
                      fullWidth
                      name="lastName"
                      id="lastName"
                      label="Last name"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      className="Signup-text"
                      variant="outlined"
                      required
                      fullWidth
                      name="email"
                      id="email"
                      label="Email address"
                      autoComplete="email"
                    />
                  </Grid>
                </Grid>
                <Box my={2}>
                  <Button
                    sx={{
                      backgroundColor: ColorCode.StormGreen,
                      fontFamily: "Lato",
                    }}
                    className="Signup-text"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    {content["01_primary-action"]}
                  </Button>
                </Box>
              </Paper>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
