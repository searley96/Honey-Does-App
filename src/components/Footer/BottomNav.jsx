import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, CssBaseline, Fab, IconButton, Menu, MenuItem } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function BottomNav() {

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

  // handles the account icon menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // navigation
  const toHome = () => {
    history.push('/home');
  }

  const toProfile = () => {
    history.push('/profile');
    setAnchorEl(null);
  }

  const toClientForm = () => {
    
    if (user.form_job_id == null) {

      dispatch({
        type: 'CREATE_JOB_ID'
      })
    }
    
    history.push('/bathroomForm')
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    setAnchorEl(null);
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, px: 3.2 }}>
        <Toolbar>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <IconButton color="inherit" aria-label="open drawer" onClick={toHome}>
              <HomeIcon fontSize='large' />
            </IconButton>
            {/* <StyledFab sx={{backgroundColor: 'rgb(252,228,62)'}} aria-label="new clean request"> */}

            {(!user.form_job_id && user.role ==='client') &&
              <StyledFab color='secondary' aria-label="new clean request" onClick={toClientForm}>
                <CleaningServicesIcon />
              </StyledFab> 
              // <>
              //   <IconButton color="inherit" aria-label="open drawer" onClick={editPrevious}>
              //     <ArrowBackIosNewIcon fontSize='large' />
              //   </IconButton>
              //   <IconButton color="inherit" aria-label="open drawer" onClick={toHome}>
              //     <ArrowForwardIosIcon fontSize='large' />
              //   </IconButton>
              // </>


            }
            {/* <Box sx={{ flexGrow: 1 }} /> */}
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
              <MenuItem onClick={toProfile}>Profile</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default BottomNav;
