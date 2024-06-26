import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { logout } from '../../actions/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  }

  const auth = useSelector((state) => state.auth);
  const userName = auth.user.user.Name;

  return (
    <div>
      <AppBar position="static" sx={{ flexGrow: 1 }} style={{ backgroundColor: 'grey', color: 'white' }}>
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ marginRight: 2 }}
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => { handleMenuClose(); navigate("/"); }}>Feed</MenuItem>
                <MenuItem onClick={() => { handleMenuClose(); navigate("/postbyid"); }}>My Memories</MenuItem>
                <MenuItem onClick={() => { handleMenuClose(); navigate("/add"); }}>Add Memories</MenuItem>
                <MenuItem onClick={handleSignOut}>Signout</MenuItem>
              </Menu>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Navbar
                <span style={{ marginLeft: '1rem' }}>Hello, {userName}</span>
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h5" sx={{ flexGrow: 1 }}>
                Navbar
                <span style={{ marginLeft: '5rem' }}>Hello, {userName}</span>
              </Typography>
              <Button
                color="inherit"
                style={{ fontSize: 'larger' }}
                onClick={() => navigate("/")}
              >
                Feed
              </Button>
              <Button
                color="inherit"
                style={{ fontSize: 'larger' }}
                onClick={() => navigate("/postbyid")}
              >
                My Memories
              </Button>
              <Button
                color="inherit"
                style={{ fontSize: 'larger' }}
                onClick={() => navigate("/add")}
              >
                Add Memories
              </Button>
              <Button
                color="inherit"
                style={{ fontSize: 'larger' }}
                onClick={handleSignOut}
              >
                Signout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
