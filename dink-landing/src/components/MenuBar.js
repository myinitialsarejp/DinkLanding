import * as React from "react";
import { ColorCode } from "../enum/colorCodes.ts";
import {
  AppBar,
  Toolbar,
  Paper,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import dinkLogo from "../assets/dinkLogo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const MenuBar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (e) => {
    setShowMenu(true);
    setAnchorEl();
  };

  const handleClose = () => {
    setShowMenu(false);
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Paper elevation={8}>
        <AppBar
          position="fixed"
          sx={{
            marginTop: "10px",
            backgroundColor: ColorCode.RynFlesh,
            borderRadius: "8px",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <img
              src={dinkLogo}
              alt="Logo"
              style={{ height: 50, marginRight: 16, marginLeft: 15 }}
            />
            <IconButton
              size="large"
              aria-label="site-menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={showMenu}
            onClose={handleClose}
          >
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>About</MenuItem>
            </Link>
          </Menu>
        </AppBar>
      </Paper>
    </React.Fragment>
  );
};

export default MenuBar;
