import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FormControl, FormGroup, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';

function CabinetGroup() {

    const kitchen = useSelector(store => store.clientKitchen)
    const dispatch = useDispatch();
    
    return (
        <>
            <h3>Cabinets</h3>
            <FormGroup>
                {/* CABINETS */}
                <FormControl>
                    <FormLabel>Wipe the fronts of the cabinets and drawers in the kitchen?</FormLabel>
                    <RadioGroup aria-labelledby="clean_cabinets" name="clean_cabinets"
                        row value={kitchen.wipe_cabinets}
                        onChange={e => dispatch({ type: 'SET_WIPE_CABINETS', payload: event.target.value })}>
                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                        <FormControlLabel value="no" control={<Radio />} label="no" />
                    </RadioGroup>
                    {kitchen.wipe_cabinets === 'yes' &&
                        <RadioGroup>
                            {/* CABINET CLEAN METHOD */}
                            <FormLabel>How should we clean cabinets?</FormLabel>
                            <RadioGroup aria-labelledby="wipe_or_spot_cabinets" name="wipe_or_spot_cabinets"
                                row value={kitchen.cabinet_spot_full_clean}
                                onChange={e => dispatch({ type: 'SET_CABINET_SPOT_FULL_CLEAN', payload: event.target.value })}>
                                <FormControlLabel value="spot clean" control={<Radio />} label="spot clean" />
                                <FormControlLabel value="full wipe down" control={<Radio />} label="full wipe down" />
                            </RadioGroup>

                            {/* USE ORANGE GLO FOR WOOD? */}
                            <FormLabel>If wood cabinets, should we use orange glo polish?</FormLabel>
                            <RadioGroup aria-labelledby="wipe_or_spot_cabinets" name="wipe_or_spot_cabinets"
                                row value={kitchen.cabinet_orange_glo}
                                onChange={e => dispatch({ type: 'SET_CABINET_ORANGE_GLO', payload: event.target.value })}>
                                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                <FormControlLabel value="no" control={<Radio />} label="no" />
                            </RadioGroup>
                        </RadioGroup>
                    }


                </FormControl>

            </FormGroup>
        </>
    );
}

export default CabinetGroup;