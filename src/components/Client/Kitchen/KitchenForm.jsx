import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TextField, FormControl, FormGroup, RadioGroup, Checkbox, FormLabel, FormControlLabel, Radio } from '@mui/material';
import CabinetGroup from './CabinetGroup';

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

    function StoveGroup() {



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
                    </FormControl>
                </FormGroup>
            </>
        )
    }
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

    function ApplianceGroup() {
        return (
            <>
                <h3>Appliances</h3>
                {/* APPLIANCES */}
                <FormGroup>
                    <FormControl>

                        <FormLabel>Do you want us to wipe the fronts of appliances?</FormLabel>
                        <RadioGroup aria-labelledby="wipe_appliances" name="wipe_appliances"
                            row value={kitchen.wipe_appliances}
                            onChange={e => dispatch({ type: 'SET_WIPE_APPLIANCES', payload: event.target.value })}>
                            <FormControlLabel value="yes" control={<Radio />} label="yes" />
                            <FormControlLabel value="no" control={<Radio />} label="no" />
                        </RadioGroup>

                        {/* if cleanAppliances is set to yes, display specific appliances to be cleaned */}
                        {kitchen.wipe_appliances === 'yes' &&
                            <>
                                {/* CLEAN FRIDGE */}
                                <h4>Fridge</h4>
                                <FormLabel>Wipe Fridge?</FormLabel>
                                <RadioGroup aria-labelledby="wipe_fridge" name="wipe_fridge"
                                    row value={kitchen.wipe_fridge}
                                    onChange={e => dispatch({ type: 'SET_WIPE_FRIDGE', payload: event.target.value })}>
                                    <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="no" />
                                </RadioGroup>
                            </>
                        }
                        {kitchen.wipe_fridge === 'yes' &&
                            <>
                                {/* CHECK IF FRIDGE IS STAINLESS STEEL */}
                                <FormLabel>Is the fridge stainless steel?</FormLabel>
                                <RadioGroup aria-labelledby="fridge_ss" name="fridge_ss"
                                    row value={kitchen.fridge_stainless_steel}
                                    onChange={e => dispatch({ type: 'SET_FRIDGE_SS', payload: event.target.value })}>
                                    <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="no" />
                                </RadioGroup>
                            </>
                        }

                        {kitchen.wipe_appliances === 'yes' &&
                            <>
                                {/* CLEAN DISHWASHER */}
                                <h4>Dishwasher</h4>
                                <FormLabel>Wipe dishwasher?</FormLabel>
                                <RadioGroup aria-labelledby="wipe_dishwasher" name="wipe_dishwasher"
                                    row value={kitchen.wipe_dishwasher}
                                    onChange={e => dispatch({ type: 'SET_WIPE_DISHWASHER', payload: event.target.value })}>
                                    <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="no" />
                                </RadioGroup>
                            </>
                        }
                        {kitchen.wipe_dishwasher === 'yes' &&
                            <>
                                {/* CHECK IF DISHWASHER IS STAINLESS STEEL */}
                                <FormLabel>Is the dishwasher stainless steel?</FormLabel>
                                <RadioGroup aria-labelledby="dishwasher_ss" name="dishwasher_ss"
                                    row value={kitchen.dishwasher_stainless_steel}
                                    onChange={e => dispatch({ type: 'SET_DISHWASHER_SS', payload: event.target.value })}>
                                    <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="no" />
                                </RadioGroup>
                            </>
                        }
                        {kitchen.wipe_appliances === 'yes' &&
                            <>
                                {/* CLEAN DEEP FREEZE */}
                                <h4>Deep Freeze</h4>
                                <FormLabel>Wipe deep freezer?</FormLabel>
                                <RadioGroup aria-labelledby="wipe_deep_freeze" name="wipe_deep_freeze"
                                    row value={kitchen.wipe_deep_freezer}
                                    onChange={e => dispatch({ type: 'SET_WIPE_DEEP_FREEZER', payload: event.target.value })}>
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
    // function CabinetGroup() {
    //     return (
    //         <>
    //             <h3>Cabinets</h3>
    //             <FormGroup>
    //                 {/* CABINETS */}
    //                 <FormControl>
    //                     <FormLabel>Wipe the fronts of the cabinets and drawers in the kitchen?</FormLabel>
    //                     <RadioGroup aria-labelledby="clean_cabinets" name="clean_cabinets"
    //                         row value={kitchen.wipe_cabinets}
    //                         onChange={e => dispatch({ type: 'SET_WIPE_CABINETS', payload: event.target.value })}>
    //                         <FormControlLabel value="yes" control={<Radio />} label="yes" />
    //                         <FormControlLabel value="no" control={<Radio />} label="no" />
    //                     </RadioGroup>
    //                     {kitchen.wipe_cabinets === 'yes' &&
    //                         <RadioGroup>
    //                             {/* CABINET CLEAN METHOD */}
    //                             <FormLabel>How should we clean cabinets?</FormLabel>
    //                             <RadioGroup aria-labelledby="wipe_or_spot_cabinets" name="wipe_or_spot_cabinets"
    //                                 row value={kitchen.cabinet_spot_full_clean}
    //                                 onChange={e => dispatch({ type: 'SET_CABINET_SPOT_FULL_CLEAN', payload: event.target.value })}>
    //                                 <FormControlLabel value="spot clean" control={<Radio />} label="spot clean" />
    //                                 <FormControlLabel value="full wipe down" control={<Radio />} label="full wipe down" />
    //                             </RadioGroup>

    //                             {/* USE ORANGE GLO FOR WOOD? */}
    //                             <FormLabel>If wood cabinets, should we use orange glo polish?</FormLabel>
    //                             <RadioGroup aria-labelledby="wipe_or_spot_cabinets" name="wipe_or_spot_cabinets"
    //                                 row value={kitchen.cabinet_orange_glo}
    //                                 onChange={e => dispatch({ type: 'SET_CABINET_ORANGE_GLO', payload: event.target.value })}>
    //                                 <FormControlLabel value="yes" control={<Radio />} label="yes" />
    //                                 <FormControlLabel value="no" control={<Radio />} label="no" />
    //                             </RadioGroup>
    //                         </RadioGroup>
    //                     }


    //                 </FormControl>

    //             </FormGroup>
    //         </>
    //     );
    // }
}

export default KitchenForm;