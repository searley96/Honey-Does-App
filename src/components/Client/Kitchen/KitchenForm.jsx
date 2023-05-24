import CabinetGroup from './CabinetGroup';
import StoveGroup from './StoveGroup';
import ApplianceGroup from './ApplianceGroup';
import MicrowaveGroup from './MicrowaveGroup';
import CountersSinksGroup from './CountersSinksGroup';
import KitchenFloors from './KitchenFloors';
import { Button, Stack, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function KitchenForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    // jobId is taken from the active job that was set on the add clean button press
  // stored in activeJobReducer
    const jobId = useSelector(store => store.activeJobReducer.job_id);
    // the list of forms that have a job_id that match user.form_job_id
    const formList = useSelector(store => store.formList);
    // the state of the current kitchen form
    const kitchen = useSelector(store => store.clientKitchen);

    const addKitchen = () => {
        const order = formList.length + 1;
        // dispatch to room.saga that triggers post request to form.router ('/kitchen/')
        dispatch({ type: 'ADD_KITCHEN', payload: { kitchen, jobId, order } });
    }

    const moveToOtherRooms = () => {
        const order = formList.length + 1;
        // dispatch to room.saga that triggers post request to form.router ('/bathroom/)
        dispatch({ type: 'ADD_KITCHEN', payload: { kitchen, jobId, order } });
        history.push('/otherRoomForm'); // directs user to the other room form 
    }

    return (

        <Box sx={{ ml: '20px'}}>
            <h1>Kitchen Form</h1>
            <Box sx={{ mb: '60px' }}>
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

        </Box>
    );



}

export default KitchenForm;