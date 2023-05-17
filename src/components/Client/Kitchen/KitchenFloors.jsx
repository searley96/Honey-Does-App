import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TextField, FormControl, FormGroup, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';


function KitchenFloors() {

    const kitchen = useSelector(store => store.clientKitchen)
    const dispatch = useDispatch();

    return (
        <>
            <h3>Floors</h3>
            <FormGroup>
                <FormControl>
                    {/* FLOORS */}
                    <FormLabel>Do you want us to sweep and mop the kitchen floors?</FormLabel>
                    <RadioGroup aria-labelledby="sweep_mop_floor" name="sweep_mop_floor"
                        row value={kitchen.sweep_mop_floor}
                        onChange={e => dispatch({ type: 'SET_SWEEP_MOP_FLOORS', payload: event.target.value })}>
                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                        <FormControlLabel value="no" control={<Radio />} label="no" />
                    </RadioGroup>

                    {kitchen.sweep_mop_floor === 'yes' &&
                        <>
                            {/* ACCENT RUGS */}
                            <FormLabel>Do you have accent rugs that need to be moved/shaken off beforehand?</FormLabel>
                            <RadioGroup aria-labelledby="shake_rugs" name="shake_rugs"
                                value={kitchen.shake_rugs}
                                onChange={e => dispatch({ type: 'SET_SHAKE_RUGS', payload: event.target.value })}>
                                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                <FormControlLabel value="no" control={<Radio />} label="no" />
                            </RadioGroup>
                        </>
                    }

                    {kitchen.sweep_mop_floor === 'yes' &&
                        <>
                            {/* HARDWOOD FLOORING */}
                            <FormLabel>Does the kitchen have hardwood flooring?</FormLabel>
                            <RadioGroup aria-labelledby="hardwood_floors" name="hardwood_floors"
                                value={kitchen.hardwood_floors}
                                onChange={e => dispatch({ type: 'SET_HARDWOOD_FLOORS', payload: event.target.value })}>
                                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                <FormControlLabel value="no" control={<Radio />} label="no" />
                            </RadioGroup>
                        </>
                    }

                    {kitchen.hardwood_floors === 'no' &&
                        <>
                            {/* OTHER SPECIALTY FLOORING */}
                            <FormLabel>
                                Does the kitchen have other flooring that might be under warranty
                                that needs a special mop such as a Bona mop?
                            </FormLabel>
                            <RadioGroup aria-labelledby="specialty_flooring" name="specialty_flooring"
                                value={kitchen.specialty_flooring}
                                onChange={e => dispatch({ type: 'SET_SPECIALTY_FLOORING', payload: event.target.value })}>
                                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                <FormControlLabel value="no" control={<Radio />} label="no" />
                            </RadioGroup>
                        </>
                    }
                    {kitchen.specialty_flooring === 'yes' &&
                        <>
                            {/* OTHER SPECIALTY FLOORING */}
                            <FormLabel>Please explain required cleaning method</FormLabel>
                            <TextField size='small' value={kitchen.specialty_flooring_instructions}
                                onChange={e =>
                                    dispatch({
                                        type: 'SET_SPECIALTY_FLOORING_INSTRUCTIONS',
                                        payload: event.target.value
                                    })}
                            />

                        </>
                    }

                    {kitchen.sweep_mop_floor === 'yes' &&
                        <>
                            {/* MOP LOCATION */}
                            <FormLabel>Please explain location of the mop for ease of access.</FormLabel>
                            <TextField size='small' value={kitchen.mop_location}
                                onChange={e =>
                                    dispatch({
                                        type: 'SET_MOP_LOCATION',
                                        payload: event.target.value
                                    })}
                            />

                        </>
                    }
                </FormControl>
            </FormGroup>
        </>
    )
}

export default KitchenFloors;