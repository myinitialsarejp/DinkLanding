import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTheme } from '@mui/material/styles';
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ColorCode } from "../enum/colorCodes.ts";

export default function Footer(props) {
  const theme = useTheme();
  const content = {
    copy: "© 2024 Dink, Inc. All rights reserved.",
    ...props.content,
  };

  return (
    <footer
      style={{
        [theme.breakpoints.down("md")]: {
          textAlign: "center",
        },
      }}
    >
      <Container maxWidth="lg" sx={{backgroundColor: ColorCode.BlueCuracao}}>
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center">
          <Typography
            color="textSecondary"
            component="p"
            gutterBottom={false}
            sx={{
              [theme.breakpoints.down("md")]: {
                width: "100%",
                order: 12,
              },
            }}
          >
            {content["copy"]}
          </Typography>
          <Box
            ml="auto"
            sx={{
              [theme.breakpoints.down("md")]: {
                width: "100%",
                marginBottom: theme.spacing(2),
              },
            }}
          >
            <IconButton color="textSecondary" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="textSecondary" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="textSecondary" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton color="textSecondary" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
