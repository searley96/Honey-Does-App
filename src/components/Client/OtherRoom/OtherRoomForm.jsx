import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import OtherRoom from "./OtherRoom";
import { Button, Stack, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';

function OtherRoomForm() {
    console.log('Inside OtherRoomForm()')
    const dispatch = useDispatch();
    const history = useHistory();
    // jobId is taken from the active job that was set on the add clean button press
  // stored in activeJobReducer
    const jobId = useSelector(store => store.activeJobReducer.job_id);
    // the list of forms that have a job_id that match user.form_job_id
    const formList = useSelector(store => store.formList);
    // the state of the current kitchen form
    const wipeDust = useSelector(store => store.clientOtherRoom);

    // useEffect(() => {
    //     dispatch({type: 'JOB_ID', payload: jobId});
    //     dispatch({type: 'SET_ROOM_TYPE'})
    // }, [])
    
    // Post form to database, clear form, and go to the next page.
    
    const addOtherRoom = () => {
        const order = formList.length + 1;
        // dispatch to room.saga that triggers post request to form.router ('/other/')
        dispatch({ type: 'ADD_OTHER_ROOM', payload: {wipeDust, jobId, order }})

    }
    const moveToWipeDust = () => {  
        const order = formList.length + 1;
        // dispatch to room.saga that triggers post request to form.router ('/other/')
        dispatch({ type: 'ADD_OTHER_ROOM', payload: {wipeDust, jobId, order }})
        history.push('/wipeDustForm'); // directs user to the wipeDust form 
    }
    

    return (
        <Box sx={{ ml: '20px'}}>
        <h1>Other Room Form</h1>
            <OtherRoom />
            
            <Stack spacing={1} direction='row' sx={{ mt: '40px', display: 'flex', justifyContent: 'space-between' }}>

                <Button variant="outlined" onClick={addOtherRoom}>
                    <AddIcon sx={{ mx: '5px' }} fontSize="small" /> Add Another Room
                </Button>

                <Button variant="contained" onClick={moveToWipeDust}>
                    <DoneIcon sx={{ mx: '5px' }} fontSize="small" /> Done with Other Rooms
                </Button>

            </Stack>
        </Box>
    )
}

export default OtherRoomForm;