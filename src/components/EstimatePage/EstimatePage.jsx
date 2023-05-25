import { Typography, Card, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import EstimateComponent from "../EstimateComponent/EstimateComponent";
import { useHistory } from "react-router-dom";

function EstimatePage() {
    const user = useSelector(store => store.user);
    const history = useHistory();

    const toBathroomForm = () => {
        history.push('/bathroomForm');
    }
    const toKitchenForm = () => {
        history.push('/kitchenForm');
    }
    const toOtherRoomsForm = () => {
        history.push('/otherRoomForm');
    }
    const toWipeDustForm = () => {
        history.push('/wipeDustForm');
    }


    return(
        <>  
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <EstimateComponent />
            </Box>
            {user.id ? 
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Card sx={{mx: '32px', width: '311px', mb: 8}}>
                    <Typography variant="h6" align="center" sx={{my: 2, fontWeight: 'bold'}}>Review Section</Typography>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1}}>
                        <Typography sx={{ml: 1}}>Bathroom Section</Typography>
                        <Button onClick={toBathroomForm}>
                            Edit <EditIcon fontSize="small" />
                        </Button>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography sx={{ml: 1}}>Kitchen Section</Typography>
                        <Button onClick={toKitchenForm}>
                            Edit <EditIcon fontSize="small"/>
                        </Button>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1}}>
                        <Typography sx={{ml: 1}}>Other Rooms Section</Typography>
                        <Button onClick={toOtherRoomsForm}>
                            Edit <EditIcon fontSize="small"/>
                        </Button>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2}}>
                        <Typography sx={{ml: 1}}>Wipe Dust Section</Typography>
                        <Button onClick={toWipeDustForm}>
                            Edit <EditIcon fontSize="small"/>
                        </Button>
                    </Box>
                </Card>
                <Button sx={{my: 4, p: 3}} variant="contained">Submit New Clean Request</Button>
            </Box>
            :
            <Card sx={{mx: '32px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Button sx={{width: '80%', height: '50%'}} variant='contained'>Create Account and Submit Request</Button>
            </Card>
            }
        </>
    )
}

export default EstimatePage;