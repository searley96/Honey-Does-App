import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FormControl, FormGroup, RadioGroup, FormLabel, FormControlLabel, Radio, Card, Paper, Box } from '@mui/material';
import { spacing } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Message({ message }) {

    const user = 1;


    // console.log(user, message.sender_id)
    return (

        // <Box sx={{ backgroundColor: '#f5f5f5'}}>
        <>
            {
                message.sender_id == user ?
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Paper className="message" variant='elevation' elevation={3}
                            sx={{
                                maxWidth: '80%',
                                px: '10px',
                                backgroundColor: '#3291b9',
                                color: '#ffffff',
                                my: '10px',
                                mr: '20px'
                            }}>
                            <p>{message.text}</p>
                        </Paper>
                    </Box>
                    :
                    <Box sx={{ display: 'flex' }}>
                        <Paper className="message" variant='elevation' elevation={3} 
                            sx={{
                                maxWidth: '80%',
                                justifyContent: 'end',
                                px: '10px',
                                backgroundColor: 'rgba(252, 185, 0,.75)',
                                my: '10px',
                                ml: '20px'
                            }}>
                            <p>{message.text}</p>
                        </Paper>
                    </Box>
            }
            {/* {message.userId == user ?
                <Box className="conversation" sx={{ display: 'flex' }}>

                    <Paper className="message" variant='elevation' elevation={3}
                        sx={{
                            maxWidth: '80%',
                            justifyContent: 'end',
                            px: '10px',
                            backgroundColor: '#fcb900',
                            my: '10px',
                            ml: '20px'
                        }}>
                        <p>{message.text}</p>
                    </Paper>
                </Box>
                :
                <Box>
                    <Paper className="message" variant='elevation' elevation={3} >
                        <p>{message.text}</p>
                    </Paper>
                </Box>
            } */}
        </>

        // </Box>

    )
}

export default Message;