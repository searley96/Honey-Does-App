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
    const dispatch = useDispatch();
    const history = useHistory();

    const toEstimate = () => {
        // history.push('/estimate')
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
                    onChange={e => dispatch({ type: 'SET_WIPE_CLEAN_GLASS', payload: event.target.value })}>
                        <FormControlLabel value='yes' control={<Radio />} label="Yes" />
                        <FormControlLabel value='no' control={<Radio />} label="No" />
                    </RadioGroup>
            {wipeDust.wipe_clean_glass === 'yes' &&
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
                    onChange={e => dispatch({ type: 'SET_DUST', payload: event.target.value })}>
                        <FormControlLabel value='yes' control={<Radio />} label="Yes" />
                        <FormControlLabel value='no' control={<Radio />} label="No" />
                    </RadioGroup>
            {wipeDust.dust === 'yes' &&
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