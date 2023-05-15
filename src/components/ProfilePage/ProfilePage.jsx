import { AppBar, Box, Button, Toolbar, Card, CssBaseline, Fab, IconButton, Menu, MenuItem, Typography } from '@mui/material';


function ProfilePage () {

    const cardStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingY: .5,
        my: 1,
        backgroundColor: 'whitesmoke'
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
                <Typography align='center' variant='h7'>
                    First Name:
                </Typography>
                <Card sx={cardStyle}>
                    <Typography sx={{display: 'inline-flex', mx: 2.5}}>First Name</Typography>
                    <Button variant='outlined' sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
                </Card>
                <Typography align='center' variant='h7'>
                    Last Name:
                </Typography>
                <Card sx={cardStyle}>
                    <Typography sx={{display: 'inline-flex', mx: 2.5}}>Last Name</Typography>
                    <Button variant='outlined' sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
                </Card>
                <Typography align='center' variant='h7'>
                    Email:
                </Typography>
                <Card sx={cardStyle}>
                    <Typography sx={{display: 'inline-flex', mx: 2.5}}>User Email Text</Typography>
                    <Button variant='outlined' sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
                </Card>
                <Typography align='center' variant='h7'>
                    Password:
                </Typography>
                <Card sx={cardStyle}>
                    <Typography sx={{display: 'inline-flex', mx: 2.5}}>User Password Text</Typography>
                    <Button variant='outlined' sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
                </Card>
                <Typography align='center' variant='h7'>
                    Phone Number:
                </Typography>
                <Card sx={cardStyle}>
                    <Typography sx={{display: 'inline-flex', mx: 2.5}}>111-111-1111</Typography>
                    <Button variant='outlined' sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
                </Card>
                <Typography align='center' variant='h7'>
                    Address:
                </Typography>
                <Card sx={cardStyle}>
                    <Typography sx={{display: 'inline-flex', mx: 2.5}}>1234 Fake Street Fake City, Fake State Fake Country 12345</Typography>
                    <Button variant='outlined' sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
                </Card>
            </Box>
        </>
    )

}

export default ProfilePage;