import OtherRoom from "./OtherRoom";
import { Button, ButtonGroup, Stack, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';

function OtherRoomForm() {
    console.log('Inside OtherRoomForm()')
    
    
    return (
        <>
            <OtherRoom />
            <Stack spacing={1} direction='row' sx={{ mt: '40px', display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined"><AddIcon sx={{ mx: '5px' }} fontSize="small" /> Add Another Room</Button>
                <Button variant="contained"><DoneIcon sx={{ mx: '5px' }} fontSize="small" /> Done with rooms</Button>
            </Stack>
        </>
    )
}

export default OtherRoomForm;