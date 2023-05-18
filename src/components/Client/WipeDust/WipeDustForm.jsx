import GlassDoorsGroup from "./GlassDoorsGroup";
import MirrorsGroup from "./MirrorsGroup";
import DustCeilingGroup from "./DustCeilingGroup";
import DustOtherGroup from "./DustOtherGroup";
import DustFurnitureGroup from "./DustFurnitureGroup"

import { Button, Stack, Box, FormGroup, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";

function WipeDustForm() {

    const wipeDust = useSelector(store => store.clientWipeDust);
    const dispatch = useDispatch();

    return (
        <>
            <h3>Wipe</h3>
            <FormGroup>
                <FormControl>
                    <FormLabel>Do you want us to wipe or clean any glass?</FormLabel>
                    <RadioGroup aria-labelledby="wipe_clean_glass" name="wipe_clean_glass"
                    row value={wipeDust.wipe_clean_glass}
                    onChange={e => dispatch({ type: 'SET_WIPE_CLEAN_GLASS', payload: event.target.value })}>
                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                        <FormControlLabel value="no" control={<Radio />} label="no" />
                    </RadioGroup>
            {wipeDust.wipe_clean_glass === 'yes' &&
                <>
                    <Box sx={{ my: '60px' }}>
                        <GlassDoorsGroup />
                    </Box>
                    <Box sx={{ my: '60px' }}>
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
                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                        <FormControlLabel value="no" control={<Radio />} label="no" />
                    </RadioGroup>
            {wipeDust.dust === "yes" &&
                <>
                    <Box sx={{ my: '60px' }}>
                        <DustCeilingGroup />
                    </Box>
                    <Box sx={{ my: '60px' }}>
                        <DustOtherGroup />
                    </Box>
                    <Box sx={{ my: '60px' }}>
                        <DustFurnitureGroup />
                    </Box>
                </>
            }
                </FormControl>
            </FormGroup>
        </>
    )
}

export default WipeDustForm;