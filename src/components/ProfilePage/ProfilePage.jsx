import { AppBar, Box, Button, Toolbar, Card, CssBaseline, Fab, IconButton, Menu, MenuItem, Typography } from '@mui/material';


function ProfilePage () {

    const cardStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingY: 1,
        my: 1
    }

    return(
        <>
            <Typography align='center' variant='h5' sx={{mt: 3, mb: 1}}>
                My Information
            </Typography>
            <Box sx={{textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                <Typography align='center' variant='h6'>
                    Email:
                </Typography>
                <Card sx={cardStyle}>
                    <Typography sx={{display: 'inline-flex', ml: 2}}>User Email Text</Typography>
                    <Button variant='outlined' sx={{display: 'inline-flex', mr: 1}}>Edit</Button>
                </Card>
                <Typography align='center' variant='h6'>
                    Password:
                </Typography>
                <Card sx={cardStyle}>
                    <Typography sx={{display: 'inline-flex', ml: 2}}>User Password Text</Typography>
                    <Button variant='outlined' sx={{display: 'inline-flex', mr: 1}}>Edit</Button>
                </Card>
                <Typography align='center' variant='h6'>
                    Phone Number:
                </Typography>
                <Card sx={cardStyle}>
                    <Typography sx={{display: 'inline-flex', ml: 2}}>User Phone Number Text</Typography>
                    <Button variant='outlined' sx={{display: 'inline-flex', mr: 1}}>Edit</Button>
                </Card>
                <Typography align='center' variant='h6'>
                    Address:
                </Typography>
                <Card sx={cardStyle}>
                    <Typography sx={{display: 'inline-flex', ml: 2}}>User Address Text</Typography>
                    <Button variant='outlined' sx={{display: 'inline-flex', mr: 1}}>Edit</Button>
                </Card>
            </Box>
        </>
    )

}

export default ProfilePage;