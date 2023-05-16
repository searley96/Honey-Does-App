import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { Box } from '@mui/material';

function LandingPage() {

  const onLogin = (event) => {
    history.push('/login');
  };

  const imgStyle = {
    width: '80%',
    height: '120px'

  }

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  }

  return (
    <>
      <Box sx={boxStyle}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img style={imgStyle} src='./images/Honey-Does-Inline-Logo.png'/>
        </div>
      </Box>
    </>
  );
}

export default LandingPage;
