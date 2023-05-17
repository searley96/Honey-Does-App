import CabinetGroup from './CabinetGroup';
import StoveGroup from './StoveGroup';
import ApplianceGroup from './ApplianceGroup';
import MicrowaveGroup from './MicrowaveGroup';
import CountersSinksGroup from './CountersSinksGroup';
import KitchenFloors from './KitchenFloors';
import { Button, ButtonGroup, Stack, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';

import './Kitchen.css';

function KitchenForm() {

    return (

        <>
            <Box sx={{ my: '60px' }}>
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
                <Button variant="outlined"><AddIcon sx={{ mx: '5px' }} fontSize="small" /> Add Another Kitchen</Button>
                <Button variant="contained"><DoneIcon sx={{ mx: '5px' }} fontSize="small" /> Done with kitchen forms</Button>
            </Stack>

        </>
    );



}

export default KitchenForm;