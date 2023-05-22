import { useDispatch, useSelector } from "react-redux";

import {  Box, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';

function MirrorsGroup() {

    const wipeDust = useSelector(store => store.clientWipeDust);
    const dispatch = useDispatch();

    return (
        <>
            <h3>Other Mirrors</h3>
            {/* Wipe Other Mirrors */}
            <FormLabel>Do you want us to wipe any other mirrors besides the ones in the bathroom?</FormLabel>
            <RadioGroup aria-labelledby="other_mirrors" name="other_mirrors"
            row value={wipeDust.other_mirrors}
            onChange={e => dispatch({ type: 'SET_OTHER_MIRRORS', payload: (e.target.value == 'true') })}>
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
            {wipeDust.other_mirrors === true &&
            <>
                {/* Number of Other Mirrors */}
                <Box>
                    <FormLabel>How many other mirrors?</FormLabel>
                    <TextField type="number" size="small" placeholder="Enter a number" onChange={e => dispatch({ type: 'SET_OTHER_MIRRORS_NUMBER', payload: e.target.value })} />
                </Box>
                {/* Other Mirror Locations */}
                <Box>
                    <FormLabel>Please list where the other mirrors are</FormLabel>
                    <TextField
                        multiline
                        sx={{width: '90%'}}
                        size="small"
                        placeholder="Example: 1. Den, 2. Backdoor, etc."
                        onChange={e => dispatch({ type: 'SET_OTHER_MIRRORS_LOCATION', payload: e.target.value })}
                    />
                </Box>
            </>
            }
        </>
    )
}

export default MirrorsGroup;