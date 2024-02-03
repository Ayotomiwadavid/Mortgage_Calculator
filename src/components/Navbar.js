import React from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" component="p">
            Thoth Mortgage
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
