import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ColorCode } from "../enum/colorCodes.ts";
import { Link } from "react-router-dom";


const MenuDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const MenuItems = (
    <Box sx={{ width: 250 }} role="presentation">
      <List disablePadding>
        <ListItem disablePadding>
          <Link
            to='/about'
            style={{justifyContent:'center', width:'100%', textDecoration: "none", color: "black" }}
          >
            <ListItemButton>
              <ListItemText primary="About" primaryTypographyProps={{sx: {fontFamily:'Lato'}}} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ position: "fixed", top: 0, right: 0 }}>
      <IconButton
        onClick={toggleDrawer}
        sx={{
          backgroundColor: ColorCode.PineNut,
          fontSize: "30px",
          margin: "12px",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        elevation={12}
        open={isOpen}
        onClose={toggleDrawer}
        anchor="right"
        PaperProps={{ sx: { backgroundColor: ColorCode.PineNut } }}
      >
        {MenuItems}
      </Drawer>
    </Box>
  );
};

export default MenuDrawer;
