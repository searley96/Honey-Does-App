import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {  FormControl, FormGroup, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';

function BathroomType() {

    const bathroom = useSelector(store => store.clientBathroomReducer)
    const dispatch = useDispatch();

    return (
        <>
        <h3>Bathroom Type</h3>
        <FormGroup>
            <FormControl>

            <FormLabel id="bathroom-type">Bathroom Type</FormLabel>
        <RadioGroup
          aria-labelledby="bathroom-type"
          name="bathroom-type-group"
          row value={bathroom.room_type}
         
        >
          <FormControlLabel
            value="full-bath"
            control={<Radio />}
            label="Full Bath"
          />
          <FormControlLabel
            value="half-bath"
            control={<Radio />}
            label="Half Bath"
          />
          <FormControlLabel
            value="no-bath"
            control={<Radio />}
            label="Don't Clean"
          />
        </RadioGroup>
            </FormControl>
        </FormGroup>
        </>
    )
}

export default BathroomType;