import GlassDoorsGroup from "./GlassDoorsGroup";
import MirrorsGroup from "./OtherMirrorsGroup";
import DustCeilingGroup from "./DustCeilingGroup";
import DustOtherGroup from "./DustOtherGroup";
import DustFurnitureGroup from "./DustFurnitureGroup"

import { Button, Stack, Box, FormGroup, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function WipeDustForm() {

    const wipeDust = useSelector(store => store.clientWipeDust);
    const jobId = useSelector(store => store.user.form_job_id)
    const dispatch = useDispatch();
    const history = useHistory();

    const toEstimate = () => {
        dispatch({type: 'ADD_WIPE_DUST', payload: {wipeDust, jobId, order: 4}})
        // history.push('/estimate')
        history.push('/profile');
        console.log('Ready for estimate!');
    }

    return (
        <>
            <h3>Wipe</h3>
            <FormGroup>
                <FormControl>
                    <FormLabel>Do you want us to wipe or clean any glass?</FormLabel>
                    <RadioGroup aria-labelledby="wipe_clean_glass" name="wipe_clean_glass"
                    row value={wipeDust.wipe_clean_glass}
                    onChange={e => dispatch({ type: 'SET_WIPE_CLEAN_GLASS', payload: (e.target.value == 'true') })}>
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
            {wipeDust.wipe_clean_glass === true &&
                <>
                    <Box sx={{ my: '30px' }}>
                        <GlassDoorsGroup />
                    </Box>
                    <Box sx={{ my: '30px' }}>
                        <MirrorsGroup />
                    </Box>
                </>
            }
                </FormControl>
            </FormGroup>
            <h3>Dust</h3>
            <FormGroup>
                <FormControl>
                    <FormLabel>Do you want us to dust?</FormLabel>
                    <RadioGroup aria-labelledby="dust" name="dust"
                    row value={wipeDust.dust}
                    onChange={e => dispatch({ type: 'SET_DUST', payload: (e.target.value == 'true') })}>
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
            {wipeDust.dust === true &&
                <>
                    <Box sx={{ my: '30px' }}>
                        <DustCeilingGroup />
                    </Box>
                    <Box sx={{ my: '30px' }}>
                        <DustOtherGroup />
                    </Box>
                    <Box sx={{ my: '30px' }}>
                        <DustFurnitureGroup />
                    </Box>
                </>
            }
                </FormControl>
            </FormGroup>
            <Stack>
                <Button variant="contained" sx={{width: '70%', alignSelf: 'center', mt: 5}} onClick={toEstimate}>
                    Complete Form and Get Estimate
                </Button>
            </Stack>
        </>
    )
}

export default WipeDustForm;