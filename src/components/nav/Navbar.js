import React, { useState } from "react";
import { Avatar, Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-removebg-preview (1).png";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Box className="nav-main">
        <img src={logo} alt="logo" />
        <div className="nav-list">
          <Link to="/">Home</Link>
          <Link to="/watch-list">WatchList</Link>
          <Avatar />
        </div>
        <div className="menuIcon">
          <IconButton onClick={handleOpenDrawer}>
            <MenuIcon fontSize="large" sx={{ color: "white" }} />
          </IconButton>
        </div>
      </Box>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={closeDrawer}
        className="drawer"
      >
        <div className="drawerIcon">
          <ChevronRightIcon onClick={closeDrawer} />
        </div>
        <div className="drawer-list">
          <Link to="/">Home</Link>
          <Link to="watch-list">WatchList</Link>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
