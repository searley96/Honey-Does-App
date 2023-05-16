import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { Box, Button } from '@mui/material';
import { border, Stack } from '@mui/system';

function LandingPage() {

  const onLogin = (event) => {
    history.push('/login');
  };

  const imgStyle = {
    width: '84%',
    height: '110px',
    border: 'solid 6px #1769aa',
    padding: '2%'
  }

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  }

  return (
    <>
      <Box sx={boxStyle}>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20%', marginBottom: '20%'}}>
          <img style={imgStyle} src='./images/Honey-Does-Inline-Logo.png'/>
        </div>
        <Stack spacing={3}>
          <Button variant='contained'>
            Get an Estimate
          </Button>
          <Button variant='contained'>
            Login
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default LandingPage;
