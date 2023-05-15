import { AppBar, Box, Button, Toolbar, CssBaseline, Fab, IconButton, Menu, MenuItem, Typography } from '@mui/material';


function ProfilePage () {

    return(
        <>
            <h1>This is the Client Profile Page</h1>
            <Typography align='center'>
                My Information
            </Typography>
            <Box sx={{}}>
                <Typography align='center'>
                    Email:
                </Typography>
                <Button>Edit</Button>
            </Box>
            <Typography align='center'>
                Password:
            </Typography>
            <Button>Edit</Button>
            <Typography align='center'>
                Phone Number:
            </Typography>
            <Button>Edit</Button>
            <Typography align='center'>
                Address:
            </Typography>
            <Button>Edit</Button>
        </>
    )

}

export default ProfilePage;