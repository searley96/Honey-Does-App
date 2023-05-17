import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FormControl, FormGroup, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';

function StoveGroup() {

    const kitchen = useSelector(store => store.clientKitchen)
    const dispatch = useDispatch();

    return (
        <>
            <h3>Stove</h3>
            <FormGroup>
                <FormControl>
                    {/* CLEAN STOVE */}
                    <FormLabel>Do you want us to clean the top of the stove?</FormLabel>
                    <RadioGroup aria-labelledby="clean_stove" name="clean_stove"
                        row value={kitchen.clean_stove_top}
                        onChange={e => dispatch({ type: 'SET_STOVE_TOP', payload: event.target.value })}>
                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                        <FormControlLabel value="no" control={<Radio />} label="no" />
                    </RadioGroup>

                    {/* if cleanStove is set to yes, display specific appliances to be cleaned */}
                    {kitchen.clean_stove_top === 'yes' &&
                        <>
                            {/* STOVE TYPE */}
                            <FormLabel>What kind of stove do you have?</FormLabel>
                            <RadioGroup aria-labelledby="stove_type" name="stove_type"
                                value={kitchen.type_of_stove}
                                onChange={e => dispatch({ type: 'SET_STOVE_TYPE', payload: event.target.value })}>
                                <FormControlLabel value="flat top / glass top" control={<Radio />} label="flat top / glass top" />
                                <FormControlLabel value="drip pans with removable burners" control={<Radio />} label="drip pans with removable burners" />
                                <FormControlLabel value="industrial stove with removable grates" control={<Radio />} label="industrial stove with removable grates" />
                            </RadioGroup>
                        </>
                    }
                    {kitchen.clean_stove_top === 'yes' &&
                        <>
                            {/* HOOD VENT */}
                            <FormLabel>Do you want us to clean the hood vent?</FormLabel>
                            <RadioGroup aria-labelledby="clean_hood_vent" name="clean_hood_vent"
                                value={kitchen.clean_hood_vent}
                                onChange={e => dispatch({ type: 'SET_HOOD_VENT', payload: event.target.value })}>
                                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                <FormControlLabel value="no" control={<Radio />} label="no" />
                            </RadioGroup>
                        </>
                    }
                    {kitchen.clean_hood_vent === 'yes' &&
                        <>
                            {/* HOOD VENT SPECIAL INSTRUCTIONS */}
                            <FormLabel>Any special instructions for cleaning the hood vent?</FormLabel>
                            <input value={kitchen.hood_vent_special_instructions}
                                onChange={e => dispatch({ type: 'SET_HOOD_VENT_INSTRUCTIONS', payload: event.target.value })
                                } />
                        </>
                    }
                    {kitchen.clean_stove_top === 'yes' &&
                        <>
                            {/* BACKSPLASH */}
                            <FormLabel>Do you want us to clean the backsplash behind the stove?</FormLabel>
                            <RadioGroup aria-labelledby="clean_backsplash" name="clean_backsplash"
                                value={kitchen.back_splash}
                                onChange={e => dispatch({ type: 'SET_BACK_SPLASH', payload: event.target.value })}>
                                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                <FormControlLabel value="no" control={<Radio />} label="no" />
                            </RadioGroup>
                        </>
                    }
                    {kitchen.clean_stove_top === 'yes' &&
                        <>
                            {/* STOVE FRONT */}
                            <FormLabel>Do you want us to clean the front of the stove?</FormLabel>
                            <RadioGroup aria-labelledby="clean_stove_front" name="clean_stove_front"
                                value={kitchen.clean_stove_front}
                                onChange={e => dispatch({ type: 'SET_STOVE_FRONT', payload: event.target.value })}>
                                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                <FormControlLabel value="no" control={<Radio />} label="no" />
                            </RadioGroup>
                        </>
                    }
                    {kitchen.clean_stove_front === 'yes' &&
                        <>
                            {/* IS STOVE FRONT STAINLESS STEEL */}
                            <FormLabel>Is the stove front stainless steel?</FormLabel>
                            <RadioGroup aria-labelledby="stove_front_ss" name="stove_front_ss"
                                value={kitchen.stove_stainless_steel}
                                onChange={e => dispatch({ type: 'SET_STOVE_SS', payload: event.target.value })}>
                                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                <FormControlLabel value="no" control={<Radio />} label="no" />
                            </RadioGroup>
                        </>
                    }
                </FormControl>
            </FormGroup>
        </>
    )
}

export default StoveGroup;