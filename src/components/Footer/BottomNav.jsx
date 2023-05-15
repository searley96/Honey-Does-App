import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, CssBaseline, Fab, IconButton, Menu, MenuItem } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

import { useState } from 'react';

function BottomAppBar() {

  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 , px: 3.2}}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <HomeIcon fontSize='large' />
          </IconButton>
          {/* <StyledFab sx={{backgroundColor: 'rgb(252,228,62)'}} aria-label="new clean request"> */}
          <StyledFab color='white' aria-label="new clean request">
            <CleaningServicesIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={handleClick}>
            <AccountBoxIcon fontSize='large' />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default BottomAppBar;
