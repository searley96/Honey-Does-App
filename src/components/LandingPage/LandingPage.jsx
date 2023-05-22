import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useDispatch } from 'react-redux';

function LandingPage() {

  const history = useHistory();
  const dispatch = useDispatch();

  const toLogin = (event) => {
    history.push('/login');
  };

  const toForm = (event) => {
    // history.push('/form');
    
    
    dispatch({
      type: 'CREATE_JOB_ID'
    })
  }

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
          <Button variant='contained' sx={{padding: 1.5}} onClick={toForm}>
            Get an Estimate
          </Button>
          <Button variant='contained' sx={{padding: 1.5}} onClick={toLogin}>
            Login
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default LandingPage;
