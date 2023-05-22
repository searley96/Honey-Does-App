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
                        onChange={e => dispatch({ type: 'SET_WIPE_CABINETS', payload: (e.target.value === 'true') })}>
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
                    {kitchen.wipe_cabinets === true &&
                        <RadioGroup>
                            {/* CABINET CLEAN METHOD */}
                            <FormLabel>How should we clean cabinets?</FormLabel>
                            <RadioGroup aria-labelledby="wipe_or_spot_cabinets" name="wipe_or_spot_cabinets"
                                row value={kitchen.cabinet_spot_full_clean}
                                onChange={e => dispatch({ type: 'SET_CABINET_SPOT_FULL_CLEAN', payload: event.target.value })}>
                                <FormControlLabel value="Spot Clean" control={<Radio />} label="Spot Clean" />
                                <FormControlLabel value="Full Wipe Down" control={<Radio />} label="Full Wipe Down" />
                            </RadioGroup>

                            {/* USE ORANGE GLO FOR WOOD? */}
                            <FormLabel>If wood cabinets, should we use orange glo polish?</FormLabel>
                            <RadioGroup aria-labelledby="wipe_or_spot_cabinets" name="wipe_or_spot_cabinets"
                                row value={kitchen.cabinet_orange_glo}
                                onChange={e => dispatch({ type: 'SET_CABINET_ORANGE_GLO', payload: (e.target.value === 'true') })}>
                                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                            </RadioGroup>
                        </RadioGroup>
                    }


                </FormControl>

            </FormGroup>
        </>
    );
}

export default CabinetGroup;