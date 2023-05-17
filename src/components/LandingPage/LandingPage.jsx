import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { Box, Button, Typography } from '@mui/material';
import { border, Stack } from '@mui/system';

function LandingPage() {

  const onLogin = (event) => {
    history.push('/login');
  };

  const imgStyle = {
    width: '190px',
    height: '190px',
    border: 'solid 6px #0288d1',
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
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20%', marginBottom: '10%'}}>
          <a href="https://honeydoesllc.com/" target="_blank" rel="link to Honey Does LLC website">
            <img style={imgStyle} src='./images/Honey-Does-Landing.jpeg'/>
          </a>
        </div>
        <div style={{width: '300px'}}>
          <Typography variant='h5' align='center' color='#3291b9' sx={{mb: 5, fontStyle: 'italic', textDecoration: 'underline'}} >
            Meeting all of your cleaning needs with excellence!
          </Typography>
        </div>
        <Stack spacing={3} sx={{width: '80%'}}>
          <Button variant='contained' sx={{padding: 1.5}}>
            Get an Estimate
          </Button>
          <Button variant='contained' sx={{padding: 1.5}}>
            Login
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default LandingPage;
