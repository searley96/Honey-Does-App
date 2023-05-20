import { useDispatch, useSelector } from "react-redux";

import { Button, Stack, Box, FormGroup, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';

function GlassDoorsGroup() {

    const wipeDust = useSelector(store => store.clientWipeDust);
    const dispatch = useDispatch();

    return (
        <>
            <h3>Glass Doors</h3>
            {/* Wipe Glass Doors */}
            <FormLabel>Do you want us to wipe your glass doors?</FormLabel>
            <RadioGroup aria-labelledby="glass_door" name="glass_door"
            row value={wipeDust.glass_door}
            onChange={e => dispatch({ type: 'SET_GLASS_DOOR', payload: (e.target.value == 'true') })}>
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
            {wipeDust.glass_door === true &&
                <>
                    {/* Number of Glass Doors */}
                    <Box>
                        <FormLabel>How many glass doors?</FormLabel>
                        <TextField type="number" size="small" placeholder="Enter a number" onChange={e => dispatch({ type: 'SET_GLASS_DOOR_NUMBER', payload: event.target.value })} />
                    </Box>
                    {/* Clean Inside of Glass Doors */}
                    <FormLabel>Do you want us to clean the inside of the glass doors?</FormLabel>
                    <RadioGroup aria-labelledby="inside_glass_door" name="inside_glass_door"
                    row value={wipeDust.inside_glass_door}
                    onChange={e => dispatch({ type: 'SET_INSIDE_GLASS_DOOR', payload: (e.target.value == 'true') })}>
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
                    {/* Clean Outside of Glass Doors */}
                    <FormLabel>Do you want us to clean the outside of the glass doors?</FormLabel>
                    <RadioGroup aria-labelledby="outside_glass_door" name="outside_glass_door"
                    row value={wipeDust.outside_glass_door}
                    onChange={e => dispatch({ type: 'SET_OUTSIDE_GLASS_DOOR', payload: (e.target.value == 'true') })}>
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
                    {/* Glass Door Location */}
                    <Box>
                        <FormLabel>Please list where the glass doors are</FormLabel>
                        <TextField
                            multiline
                            sx={{width: '90%'}}
                            size="small"
                            placeholder="Example: 1. Den, 2. Backdoor, etc."
                            onChange={e => dispatch({ type: 'SET_GLASS_DOOR_LOCATION', payload: e.target.value })}
                        />
                    </Box>
                </>
            }
        </>
    )
}

export default GlassDoorsGroup;