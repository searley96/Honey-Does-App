import CabinetGroup from './CabinetGroup';
import StoveGroup from './StoveGroup';
import ApplianceGroup from './ApplianceGroup';
import MicrowaveGroup from './MicrowaveGroup';
import CountersSinksGroup from './CountersSinksGroup';
import KitchenFloors from './KitchenFloors';
import { Button, ButtonGroup, Stack, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';

import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function KitchenForm() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const kitchen = useSelector(store => store.clientKitchen);
    const jobId = useSelector(store => store.user.form_job_id);

    // DISABLED UNTIL ROUTES ARE SET UP
    // useEffect(() => {
    //     dispatch({type: 'SET_JOB_ID', payload: jobId})
    // }, [])

    const addKitchen = () => {
        dispatch({type: 'ADD_KITCHEN', payload: {kitchen, jobId, order: 2}});
    }

    const moveToOtherRooms = () => {
        dispatch({type: 'ADD_KITCHEN', payload: {kitchen, jobId, order: 2}});
        history.push('/otherRoomForm');
    }
    
    return (

        <>
            <h1>Kitchen Form</h1>
            <Box sx={{ mb: '60px'}}>
                <CabinetGroup className='form-group' />
            </Box>
            <Box sx={{ my: '60px' }}>
                <ApplianceGroup className='form-group' />
            </Box>
            <Box sx={{ my: '60px' }}>
                <MicrowaveGroup className='form-group' />
            </Box>
            <Box sx={{ my: '60px' }}>
                <StoveGroup className='form-group' />
            </Box>
            <Box sx={{ my: '60px' }}>
                <CountersSinksGroup className='form-group' />
            </Box>
            <Box sx={{ my: '60px' }}>
                <KitchenFloors />
            </Box>
            <Stack spacing={1} direction='row' sx={{ mt: '40px', display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={addKitchen} variant="outlined"><AddIcon sx={{ mx: '5px' }} fontSize="small" /> Add Another Kitchen</Button>
                <Button onClick={moveToOtherRooms} variant="contained"><DoneIcon sx={{ mx: '5px' }} fontSize="small" /> Done with kitchen forms</Button>
            </Stack>

        </>
    );



}

export default KitchenForm;