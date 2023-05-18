import { useDispatch, useSelector } from "react-redux";

import { Button, Stack, Box, FormGroup, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';

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
            onChange={e => dispatch({ type: 'SET_OTHER_MIRRORS', payload: event.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
            {wipeDust.other_mirrors === 'yes' &&
            <>
                {/* Number of Other Mirrors */}
                <Box>
                    <FormLabel>How many other mirrors?</FormLabel>
                    <TextField type="number" size="small" placeholder="Enter a number" onChange={e => dispatch({ type: 'SET_OTHER_MIRRORS_NUMBER', payload: event.target.value })} />
                </Box>
                {/* Other Mirror Locations */}
                <Box>
                    <FormLabel>Please list where the other mirrors are</FormLabel>
                    <TextField
                        multiline
                        sx={{width: '90%'}}
                        size="small"
                        placeholder="Example: 1. Den, 2. Backdoor, etc."
                        onChange={e => dispatch({ type: 'SET_OTHER_MIRRORS_LOCATION', payload: event.target.value })}
                    />
                </Box>
            </>
            }
        </>
    )
}

export default MirrorsGroup;