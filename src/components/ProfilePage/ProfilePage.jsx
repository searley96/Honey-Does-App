import { Box, Button, Card, Modal, Stack, TextField, Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function ProfilePage () {

    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    const [userRefresh, setUserRefresh] = useState(false);
    useEffect(() => {
        dispatch({
            // grabs the info on the current logged in user again
                // lets the data on the page remain current
            type: 'FETCH_USER'
        })
    },[userRefresh])

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

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    // edit information switches
    const [editFirstNameBtn, setEditFirstNameBtn] = useState(false);
    const [editLastNameBtn, setEditLastNameBtn] = useState(false);
    const [editEmailBtn, setEditEmailBtn] = useState(false);
    const [editPasswordBtn, setEditPasswordBtn] = useState(false);
    const [editPhoneNumberBtn, setEditPhoneNumberBtn] = useState(false);
    const [editAddressBtn, setEditAddressBtn] = useState(false);

    // password update is separated from other fields due to special processing
    const [editPasswordValue, setEditPasswordValue] = useState('');

    // this object will contain all of a user's information
    const [userInfoUpdate, setUserInfoUpdate] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        phone_number: user.phone_number,
        address: user.address,
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

    // Confirmation modal
    const [openModal, setOpenModal] = useState(false);
    const [modalText, setModalText] = useState('');
    const handleClose = () => {
        setOpenModal(false)
        setModalText('');
    };

    // dynamically updates the modal text and opens it on update info submit
    const confirmationModal = (text, updatedValue) => {
        setModalText(`Are you sure you want to update your ${text} to ${updatedValue}?`);
        setOpenModal(true);
    }

    const cancelEdit = (func) => {
        setUserInfoUpdate({
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            phone_number: user.phone_number,
            address: user.address
        })
        setEditPasswordValue('');
        func;
    }

    const submitPasswordUpdate = (event) => {
        console.log('this is editPasswordValue', editPasswordValue);
        dispatch({
            type: 'UPDATE_CLIENT_INFO',
            payload: {newPassword: editPasswordValue},
            id: user.id
        });
    }

    // // test input value capture
    //     // need better solution to allow for dynamic modal text
    const submitUpdate = (event) => {
        console.log('this is userInfoUpdate', userInfoUpdate);
        dispatch({
            type: 'UPDATE_CLIENT_INFO',
            payload: userInfoUpdate,
            id: user.id
        });
        setUserRefresh(!userRefresh);

        // swaps the information back to display mode instead of edit mode
        // if (userInfoUpdate.first_name !== user.first_name) {
        //     const updateText = 'first name';
        //     confirmationModal(updateText, userInfoUpdate.first_name)
        //     setEditFirstNameBtn(false);
        // }
        // if (userInfoUpdate.last_name !== user.last_name) {
        //     const updateText = 'last name';
        //     confirmationModal(updateText, userInfoUpdate.last_name)
        //     setEditLastNameBtn(false);
        // }
        // if (userInfoUpdate.username !== user.username) {
        //     const updateText = 'email';
        //     confirmationModal(updateText, userInfoUpdate.username)
        //     setEditEmailBtn(false);
        // }
        // if (userInfoUpdate.phone_number !== user.phone_number) {
        //     const updateText = 'phone number';
        //     confirmationModal(updateText, userInfoUpdate.phone_number)
        //     setEditPhoneNumberBtn(false);
        // }
        // if (userInfoUpdate.address !== user.address) {
        //     const updateText = 'address';
        //     confirmationModal(updateText, userInfoUpdate.address)
        //     setEditAddressBtn(false);
        // }
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
                        <Button variant='outlined' onClick={() => cancelEdit(setEditFirstNameBtn(true))} sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
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
                        <Button variant='outlined' onClick={() => cancelEdit(setEditLastNameBtn(true))} sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
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
                        <Button variant='outlined' onClick={() => cancelEdit(setEditEmailBtn(true))} sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
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
                            onChange={(event) => setEditPasswordValue(event.target.value)}
                            sx={{display: 'inline-flex', mx: 2.5}}/>
                        <Box sx={{display: 'inline-flex', mr: 1.5}}>
                            <Button onClick={() => setEditPasswordBtn(false)} sx={{border: 'solid 1px red', mr: 1, px: 0}}>
                                <CloseIcon sx={{color: 'red'}}/>
                            </Button>
                            <Button sx={{border: 'solid 1px green'}} onClick={submitPasswordUpdate}>
                                <CheckIcon sx={{color: 'green'}}/>
                            </Button>
                        </Box>
                    </> 
                    :
                    <>
                        <Typography sx={{display: 'inline-flex', mx: 2.5}}>Would you like to change your password?</Typography>
                        <Button variant='outlined' onClick={() => cancelEdit(setEditPasswordBtn(true))} sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
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
                        <Button variant='outlined' onClick={() => cancelEdit(setEditPhoneNumberBtn(true))} sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
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
                        <Button variant='outlined' onClick={() => cancelEdit(setEditAddressBtn(true))}  sx={{display: 'inline-flex', mr: 1.5}}>Edit</Button>
                    </>
                    }
                </Card>
                <Modal
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {modalText}
                        </Typography>
                        <Button onClick={handleClose} sx={{border: 'solid 1px red', px: 0}}>
                            <CloseIcon sx={{color: 'red'}}/>
                        </Button>
                        <Button sx={{border: 'solid 1px green'}} onClick={() => {console.log('Yay!')}}>
                            <CheckIcon sx={{color: 'green'}}/>
                        </Button>
                    </Box>
                </Modal>
            </Box>
        </>
    )

}

export default ProfilePage;