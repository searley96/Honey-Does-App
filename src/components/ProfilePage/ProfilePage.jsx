import { Box, Button, Card, IconButton, Stack, TextField, Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import { useState } from 'react';
import { useSelector } from 'react-redux';


function ProfilePage () {

    const user = useSelector(store => store.user);

    const cardStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingY: 1,
        my: 1,
        backgroundColor: 'whitesmoke',
        maxHeight: '52.5px'
    }

    const addressCardStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingY: 1,
        my: 1,
        backgroundColor: 'whitesmoke',
        height: '100px'
    }

    // edit information switches
    const [editFirstNameBtn, setEditFirstNameBtn] = useState(false);
    const [editLastNameBtn, setEditLastNameBtn] = useState(false);
    const [editEmailBtn, setEditEmailBtn] = useState(false);
    const [editPasswordBtn, setEditPasswordBtn] = useState(false);
    const [editPhoneNumberBtn, setEditPhoneNumberBtn] = useState(false);
    const [editAddressBtn, setEditAddressBtn] = useState(false);

    // const [editFirstNameValue, setEditFirstNameValue] = useState(user.first_name);
    // const [editLastNameValue, setEditLastNameValue] = useState(user.last_name);
    // const [editEmailValue, setEmailValue] = useState(user.username);
    const [editPasswordValue, setPasswordValue] = useState('');
    // const [editPhoneNumberValue, setEditPhoneNumberValue] = useState(user.phone_number);
    // const [editAddressValue, setEditAddressValue] = useState(user.address);

    const [userInfoUpdate, setUserInfoUpdate] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        phone_number: user.phone_number,
        address: user.address
    })

    // handle input changes (except password)
    const handleInputChange = (event) => {
        console.log("this is event.target:", event.target);
        const {name, value} = event.target;
        setUserInfoUpdate({
          ...userInfoUpdate,
          [name] : value,
        })
    }

    // test input value capture
    const submitUpdate = () => {
        console.log('this is userInfoUpdate', userInfoUpdate);
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
                    {editFirstNameBtn ?
                        <>
                            <TextField
                                variant='standard'
                                size='small'
                                name='first_name'
                                value={userInfoUpdate.first_name}
                                onChange={handleInputChange}
                                sx={{display: 'inline-flex', mx: 2.5}}/>
                            <Box sx={{display: 'inline-flex', mr: 1.5}}>
                                <Button onClick={() => setEditFirstNameBtn(false)} sx={{border: 'solid 1px red', mr: 1, px: 0}}>
                                    <CloseIcon sx={{color: 'red'}}/>
                                </Button>
                                <Button sx={{border: 'solid 1px green'}} onClick={submitUpdate}>
                                    <CheckIcon sx={{color: 'green'}}/>
                                </Button>
                            </Box>   
                        </>
                        :
                        <>
                            <Typography sx={{display: 'inline-flex', mx: 2.5}}>{user.first_name}</Typography>
                            <Button variant='outlined' onClick={() => setEditFirstNameBtn(true)} sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
                        </>
                    }
                </Card>
                <Typography align='center' variant='h7'>
                    Last Name:
                </Typography>
                <Card sx={cardStyle}>
                    {editLastNameBtn ?
                    <>
                        <TextField
                            variant='standard'
                            size='small'
                            name='last_name'
                            value={userInfoUpdate.last_name}
                            onChange={handleInputChange}
                            sx={{display: 'inline-flex', mx: 2.5}}/>
                        <Box sx={{display: 'inline-flex', mr: 1.5}}>
                            <Button onClick={() => setEditLastNameBtn(false)} sx={{border: 'solid 1px red', mr: 1, px: 0}}>
                                <CloseIcon sx={{color: 'red'}}/>
                            </Button>
                            <Button sx={{border: 'solid 1px green'}} onClick={submitUpdate}>
                                <CheckIcon sx={{color: 'green'}}/>
                            </Button>
                        </Box>
                    </>
                    :
                    <>
                        <Typography sx={{display: 'inline-flex', mx: 2.5}}>{user.last_name}</Typography>
                        <Button variant='outlined' onClick={() => setEditLastNameBtn(true)} sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
                    </>
                    }
                </Card>
                <Typography align='center' variant='h7'>
                    Email:
                </Typography>
                <Card sx={cardStyle}>
                    {editEmailBtn ? 
                    <>
                        <TextField
                            variant='standard'
                            size='small'
                            name='username'
                            value={userInfoUpdate.username}
                            onChange={handleInputChange}
                            sx={{display: 'inline-flex', mx: 2.5}}/>
                        <Box sx={{display: 'inline-flex', mr: 1.5}}>
                            <Button onClick={() => setEditEmailBtn(false)} sx={{border: 'solid 1px red', mr: 1, px: 0}}>
                                <CloseIcon sx={{color: 'red'}}/>
                            </Button>
                            <Button sx={{border: 'solid 1px green'}} onClick={submitUpdate}>
                                <CheckIcon sx={{color: 'green'}}/>
                            </Button>
                        </Box>
                    </>
                    :
                    <>
                        <Typography sx={{display: 'inline-flex', mx: 2.5}}>{user.username}</Typography>
                        <Button variant='outlined' onClick={() => setEditEmailBtn(true)} sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
                    </>
                    }
                </Card>
                <Typography align='center' variant='h7'>
                    Password:
                </Typography>
                <Card sx={cardStyle}>
                    {editPasswordBtn ?
                    <>
                        <TextField
                            variant='standard'
                            size='small'
                            value={editPasswordValue}
                            sx={{display: 'inline-flex', mx: 2.5}}/>
                        <Box sx={{display: 'inline-flex', mr: 1.5}}>
                            <Button onClick={() => setEditPasswordBtn(false)} sx={{border: 'solid 1px red', mr: 1, px: 0}}>
                                <CloseIcon sx={{color: 'red'}}/>
                            </Button>
                            <Button sx={{border: 'solid 1px green'}}>
                                <CheckIcon sx={{color: 'green'}}/>
                            </Button>
                        </Box>
                    </> 
                    :
                    <>
                        <Typography sx={{display: 'inline-flex', mx: 2.5}}>Enter a New Password</Typography>
                        <Button variant='outlined' onClick={() => setEditPasswordBtn(true)} sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
                    </>
                    }
                </Card>
                <Typography align='center' variant='h7'>
                    Phone Number:
                </Typography>
                <Card sx={cardStyle}>
                    {editPhoneNumberBtn ?
                    <>
                        <TextField
                            variant='standard'
                            size='small'
                            name='phone_number'
                            value={userInfoUpdate.phone_number}
                            onChange={handleInputChange}
                            sx={{display: 'inline-flex', mx: 2.5}}/>
                        <Box sx={{display: 'inline-flex', mr: 1.5}}>
                            <Button onClick={() => setEditPhoneNumberBtn(false)} sx={{border: 'solid 1px red', mr: 1, px: 0}}>
                                <CloseIcon sx={{color: 'red'}}/>
                            </Button>
                            <Button sx={{border: 'solid 1px green'}} onClick={submitUpdate}>
                                <CheckIcon sx={{color: 'green'}}/>
                            </Button>
                        </Box>
                    </> 
                    :
                    <>
                        <Typography sx={{display: 'inline-flex', mx: 2.5}}>{user.phone_number}</Typography>
                        <Button variant='outlined' onClick={() => setEditPhoneNumberBtn(true)} sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
                    </>
                    }
                </Card>
                <Typography align='center' variant='h7'>
                    Address:
                </Typography>
                <Card sx={addressCardStyle}>
                    {editAddressBtn ?
                    <>
                        <TextField
                            multiline variant='standard'
                            size='small'
                            name='address'
                            value={userInfoUpdate.address}
                            onChange={handleInputChange}
                            sx={{display: 'inline-flex', mx: 2.5, width: 250}}/>
                        <Box sx={{display: 'inline-flex', mr: 1.5}}>
                            <Stack spacing={1}>
                                <Button onClick={() => setEditAddressBtn(false)} sx={{border: 'solid 1px red', px: 0}}>
                                    <CloseIcon sx={{color: 'red'}}/>
                                </Button>
                                <Button sx={{border: 'solid 1px green'}} onClick={submitUpdate}>
                                    <CheckIcon sx={{color: 'green'}}/>
                                </Button>
                            </Stack>
                        </Box>
                    </>                     

                    :
                    <>
                        <Typography sx={{display: 'inline-flex', mx: 2.5}}>{user.address}</Typography>
                        <Button onClick={() => setEditAddressBtn(true)} variant='outlined' sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
                    </>
                    }
                </Card>
            </Box>
        </>
    )

}

export default ProfilePage;