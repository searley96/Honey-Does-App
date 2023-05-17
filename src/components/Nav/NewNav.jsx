import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';

function NewNav() {

  const history = useHistory();

  const style = {
    marginLeft: '8%',
    marginRight: '8%',
    paddingLeft: '5%',
    paddingRight: '5%',
    height: '70px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center'
  }

  const toHome = () => {
    history.push('/home');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='primary'>
        <div style={style}>
            <img onClick={toHome} style={{maxHeight: '100%', maxWidth: '100%'}} src='./images/Honey-Does-Inline-Logo.png'/>
        </div>
      </AppBar>
    </Box>
  );
}

export default NewNav;