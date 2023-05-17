import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TextField, FormControl, FormGroup, RadioGroup, Checkbox, FormLabel, FormControlLabel, Radio } from '@mui/material';
import CabinetGroup from './CabinetGroup';
import StoveGroup from './StoveGroup';
import ApplianceGroup from './ApplianceGroup';

function KitchenForm() {
    
    const kitchen = useSelector(store => store.clientKitchen)
    const dispatch = useDispatch();

    return (

        <>

            <CabinetGroup />
            <ApplianceGroup />
            <MicrowaveGroup />
            <StoveGroup />
            
        </>
    );

   
    function MicrowaveGroup() {

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
}

export default KitchenForm;