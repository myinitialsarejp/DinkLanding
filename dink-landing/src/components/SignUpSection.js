import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ColorCode } from "../enum/colorCodes.ts";
import { Paper, styled } from "@mui/material";

export default function SignUpSection(props) {
  const content = {
    header: "Join us and Sign Up for our Beta!",
    "01_primary-action": "Sign up",
    ...props.content,
  };

  const StyledTextField = styled(TextField)({
    input: {
        color: ColorCode.StormGreen
    }
  })

  return (
    <section>
      <Container maxWidth="xs" >
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Typography >
              {content["header"]}
            </Typography>
          </Box>
          <Box>
            <form noValidate>
              <Paper elevation={12} sx={{padding:'10%', fontSize:'16px'}}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
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
                    sx={{ backgroundColor: ColorCode.StormGreen}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    {content["01_primary-action"]}
                  </Button>
                </Box>
                <Box textAlign="right">
                  <Link href="#" variant="body2">
                    {content["01_secondary-action"]}
                  </Link>
                </Box>
              </Paper>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
