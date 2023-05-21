import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FormControl, FormGroup, RadioGroup, FormLabel, FormControlLabel, Radio, TextField } from '@mui/material';

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
                        onChange={e => dispatch({ type: 'SET_STOVE_TOP', payload: (e.target.value === 'true') })}>
                        <FormControlLabel value={true} control={<Radio />} label="yes" />
                        <FormControlLabel value={false} control={<Radio />} label="no" />
                    </RadioGroup>
                

                    {/* if cleanStove is set to yes, display specific appliances to be cleaned */}
                    {kitchen.clean_stove_top === true &&
                        <>
                            {/* STOVE TYPE */}
                            <FormLabel>What kind of stove do you have?</FormLabel>
                            <RadioGroup aria-labelledby="stove_type" name="stove_type"
                                value={kitchen.type_of_stove}
                                onChange={e => dispatch({ type: 'SET_STOVE_TYPE', payload: event.target.value })}>
                                <FormControlLabel value="flat top / glass top" control={<Radio />} label="flat top / glass top" />
                                <FormControlLabel value="Drip Pans with Removable Burners" control={<Radio />} label="Drip Pans with Removable Burners" />
                                <FormControlLabel value="Industrial Stove with Removable Grates" control={<Radio />} label="Industrial Stove with Removable Grates" />
                            </RadioGroup>
                        </>
                    }
                    {kitchen.clean_stove_top === true &&
                        <>
                            {/* HOOD VENT */}
                            <FormLabel>Do you want us to clean the hood vent?</FormLabel>
                            <RadioGroup aria-labelledby="clean_hood_vent" name="clean_hood_vent"
                                value={kitchen.clean_hood_vent}
                                onChange={e => dispatch({ type: 'SET_HOOD_VENT', payload: (e.target.value === 'true') })}>
                                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                            </RadioGroup>
                        </>
                    }
                    {kitchen.clean_hood_vent === true &&
                        <>
                            {/* HOOD VENT SPECIAL INSTRUCTIONS */}
                            <FormLabel>Any special instructions for cleaning the hood vent?</FormLabel>
                            <TextField size='small' value={kitchen.hood_vent_special_instructions}
                                onChange={e => dispatch({ type: 'SET_HOOD_VENT_INSTRUCTIONS', payload: e.target.value })
                            } />
                        </>
                    }
                    {kitchen.clean_stove_top === true &&
                        <>
                            {/* BACKSPLASH */}
                            <FormLabel>Do you want us to clean the backsplash behind the stove?</FormLabel>
                            <RadioGroup aria-labelledby="clean_backsplash" name="clean_backsplash"
                                value={kitchen.back_splash}
                                onChange={e => dispatch({ type: 'SET_BACK_SPLASH', payload: (e.target.value === 'true') })}>
                                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                            </RadioGroup>
                        </>
                    }
                    {kitchen.clean_stove_top === true &&
                        <>
                            {/* STOVE FRONT */}
                            <FormLabel>Do you want us to clean the front of the stove?</FormLabel>
                            <RadioGroup aria-labelledby="clean_stove_front" name="clean_stove_front"
                                value={kitchen.clean_stove_front}
                                onChange={e => dispatch({ type: 'SET_STOVE_FRONT', payload: (e.target.value === 'true') })}>
                                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                            </RadioGroup>
                        </>
                    }
                    {kitchen.clean_stove_front === true &&
                        <>
                            {/* IS STOVE FRONT STAINLESS STEEL */}
                            <FormLabel>Is the stove front stainless steel?</FormLabel>
                            <RadioGroup aria-labelledby="stove_front_ss" name="stove_front_ss"
                                value={kitchen.stove_stainless_steel}
                                onChange={e => dispatch({ type: 'SET_STOVE_SS', payload: (e.target.value === 'true') })}>
                                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                            </RadioGroup>
                        </>
                    }
                </FormControl>
            </FormGroup>
        </>
        )
    }

export default StoveGroup;