import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import OtherRoom from "./OtherRoom";
import { Button, ButtonGroup, Stack, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';

function OtherRoomForm() {
    console.log('Inside OtherRoomForm()')
    const dispatch = useDispatch();
    const history = useHistory();
    const otherRoomForm = useSelector(store => store.clientOtherRoom);
    const jobId = useSelector(store => store.jobidReducer);

    useEffect(() => {
        dispatch({type: 'JOB_ID', payload: jobId})
    }, [])
    
    // Post form to database, clear form, and go to the next page.
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_OTHER_ROOM', payload: otherRoomForm})
        history.push('/wipeDustForm'); // TO DO: put the route of the next component here
    }
    
    return (
        <>
            <OtherRoom />
            
            <Stack spacing={1} direction='row' sx={{ mt: '40px', display: 'flex', justifyContent: 'space-between' }}>

                <Button variant="outlined" onClick={e => dispatch({ type: 'ADD_OTHER_ROOM', payload: otherRoomForm })}>
                    <AddIcon sx={{ mx: '5px' }} fontSize="small" /> Add Another Room
                </Button>

                <Button variant="contained" type="submit" onClick={submitHandler}>
                    <DoneIcon sx={{ mx: '5px' }} fontSize="small" /> Done with Other Rooms
                </Button>

            </Stack>
        </>
    )
}

export default OtherRoomForm;