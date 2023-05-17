import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FormControl, FormGroup, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';

function MicrowaveGroup() {

    const kitchen = useSelector(store => store.clientKitchen)
    const dispatch = useDispatch();
    
    return (
        <>
            <h3>Microwave</h3>
            <FormGroup>
                <FormControl>
                    {/* CLEAN MICROWAVE */}
                    <FormLabel>Do you want us to clean your microwave?</FormLabel>
                    <RadioGroup aria-labelledby="clean_microwave" name="clean_microwave"
                        row value={kitchen.clean_microwave}
                        onChange={e => dispatch({ type: 'SET_MICROWAVE', payload: event.target.value })}>
                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                        <FormControlLabel value="no" control={<Radio />} label="no" />
                    </RadioGroup>
                </FormControl>
            </FormGroup>
        </>
    )
} 

export default MicrowaveGroup;