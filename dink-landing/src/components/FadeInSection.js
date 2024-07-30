/* eslint-disable */
import { Box, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Alignment } from "../enum/alignment.ts";
import logo from "../assets/logo.svg";


const FadeInSection = (props) => {
  const alignment = props.alignment;
  const message = props.message;
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    if (domRef.current == null) {
      return;
    }
    observer.observe(domRef.current);
  }, []);

  function renderSwitch() {
    switch (alignment) {
      case Alignment.LEFT:
        return (
          <>
            <Grid item xs={5}>
              <Box
                ref={domRef}
                className={`fade-in ${isVisible ? "is-visible" : ""}`}
              >
                {message}
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
            <img src={logo} className="App-logo" alt="logo" />
            </Grid>
          </>
        );
      case Alignment.RIGHT:
        return (
          <>
            <Grid item xs={5}><img src={logo} className="App-logo" alt="logo" /></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <Box
                ref={domRef}
                className={`fade-in ${isVisible ? "is-visible" : ""}`}
              >
                {message}
              </Box>
            </Grid>
          </>
        );
      case Alignment.CENTER:
        return (
          <>
            <Grid item xs={12}>
              <Box
                ref={domRef}
                className={`fade-in ${isVisible ? "is-visible" : ""}`}
              >
                {message}
              </Box>
            </Grid>
          </>
        );
    }
  }

  return renderSwitch();
};

export default FadeInSection;
