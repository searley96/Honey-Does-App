import CabinetGroup from './CabinetGroup';
import StoveGroup from './StoveGroup';
import ApplianceGroup from './ApplianceGroup';
import MicrowaveGroup from './MicrowaveGroup';
import CountersSinksGroup from './CountersSinksGroup';
import KitchenFloors from './KitchenFloors';
import { Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import './Kitchen.css';

function KitchenForm() {

    return (

        <>
            <CabinetGroup className='formGroup'/>
            <ApplianceGroup className='formGroup'/>
            <MicrowaveGroup className='formGroup'/>
            <StoveGroup className='formGroup'/>
            <CountersSinksGroup className='formGroup'/>
            <KitchenFloors />
            <ButtonGroup sx={{mt: '40px', width: '100%'}}>
                <Button variant="outlined"><AddIcon sx={{ mx: '5px'}} fontSize="small" /> Add Another Kitchen</Button>
                <Button variant="contained"><DoneIcon sx={{ mx: '5px'}} fontSize="small" /> Done with kitchen forms</Button>
            </ButtonGroup>

        </>
    );



}

export default KitchenForm;