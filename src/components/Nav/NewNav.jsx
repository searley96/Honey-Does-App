import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

function NewNav() {
  const style = {
    marginLeft: '8%',
    marginRight: '8%',
    paddingLeft: '5%',
    paddingRight: '5%',
    height: '70px',
    backgroundColor: 'white'
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='primary'>
        <div style={style}>
            <img src='./images/Honey-Does-Inline-Logo.png'/>
        </div>
      </AppBar>
    </Box>
  );
}

export default NewNav;