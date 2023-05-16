import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TextField, FormControl, FormGroup, RadioGroup, Checkbox, FormLabel, FormControlLabel, Radio } from '@mui/material';

function KitchenForm() {
    const [cleanCabinets, setCleanCabinets] = useState("yes"),
        [cabinetsCleanType, setCabinetsCleanType] = useState(''),
        [useOrangeGlo, setOrangeGlo] = useState(''),
        [cleanAppliances, setCleanAppliances] = useState("yes"),
        [wipeFridge, setWipeFridge] = useState(''),
        [fridgeSS, setFridgeSS] = useState(''),
        [wipeDishwasher, setWipeDishwasher] = useState(''),
        [dishwasherSS, setDishwasherSS] = useState(''),
        [wipeDeepFreeze, setDeepFreeze] = useState(''),
        [cleanMicrowave, setCleanMicrowave] = useState('yes'),
        [cleanStove, setCleanStove] = useState('yes'),
        [stoveType, setStoveType] = useState(''),
        [hoodVent, setHoodVent] = useState(''),
        [hoodVentInstructions, setHoodVentInstructions] = useState('');


        const handleCleanStove = event => {
            setCleanStove(event.target.value);
            setStoveType('');
            setHoodVent('');
        }

        const handleStoveType = event => {
            setStoveType(event.target.value);
        }

        const handleHoodVent = event => {
            setHoodVent(event.target.value);
        }

        const handleHoodVentInstructions = event => {
            
            setHoodVentInstructions(event.target.value);
            console.log(hoodVentInstructions)
        }
        

    return (

        <>

            <CabinetGroup />
            <ApplianceGroup />
            <MicrowaveGroup />
            {/* <StoveGroup /> */}
            <>
                <h3>Stove</h3>
                <FormGroup>
                    <FormControl>
                        {/* CLEAN STOVE */}
                        <FormLabel>Do you want us to clean the top of the stove?</FormLabel>
                        <RadioGroup aria-labelledby="clean_stove" name="clean_stove"
                            row defaultValue="yes" value={cleanStove}
                            onChange={handleCleanStove}>
                            <FormControlLabel value="yes" control={<Radio />} label="yes" />
                            <FormControlLabel value="no" control={<Radio />} label="no" />
                        </RadioGroup>

                        {/* if cleanStove is set to yes, display specific appliances to be cleaned */}
                        {cleanStove === 'yes' &&
                            <>
                                {/* STOVE TYPE */}
                                <FormLabel>What kind of stove do you have?</FormLabel>
                                <RadioGroup aria-labelledby="stove_type" name="stove_type"
                                    value={stoveType}
                                    onChange={handleStoveType}>
                                    <FormControlLabel value="flat top / glass top" control={<Radio />} label="flat top / glass top" />
                                    <FormControlLabel value="drip pans with removable burners" control={<Radio />} label="drip pans with removable burners" />
                                    <FormControlLabel value="industrial stove with removable grates" control={<Radio />} label="industrial stove with removable grates" />
                                </RadioGroup>
                            </>
                        }
                        {cleanStove === 'yes' &&
                            <>
                                {/* HOOD VENT */}
                                <FormLabel>Do you want us to clean the hood vent?</FormLabel>
                                <RadioGroup aria-labelledby="clean_hood_vent" name="clean_hood_vent"
                                    value={hoodVent}
                                    onChange={handleHoodVent}>
                                    <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="no" />
                                </RadioGroup>
                            </>
                        }
                        {hoodVent === 'yes' &&
                            <>
                                {/* HOOD VENT SPECIAL INSTRUCTIONS */}
                                <FormLabel>Any special instructions for cleaning the hood vent?</FormLabel>
                                <input value={hoodVentInstructions} onChange={handleHoodVentInstructions} />
                            </>
                        }
                    </FormControl>
                </FormGroup>
            </>
        </>
    );

    // function StoveGroup() {

        

    //     return (
    //         <>
    //             <h3>Stove</h3>
    //             <FormGroup>
    //                 <FormControl>
    //                     {/* CLEAN STOVE */}
    //                     <FormLabel>Do you want us to clean the top of the stove?</FormLabel>
    //                     <RadioGroup aria-labelledby="clean_stove" name="clean_stove"
    //                         row defaultValue="yes" value={cleanStove}
    //                         onChange={handleCleanStove}>
    //                         <FormControlLabel value="yes" control={<Radio />} label="yes" />
    //                         <FormControlLabel value="no" control={<Radio />} label="no" />
    //                     </RadioGroup>

    //                     {/* if cleanStove is set to yes, display specific appliances to be cleaned */}
    //                     {cleanStove === 'yes' &&
    //                         <>
    //                             {/* STOVE TYPE */}
    //                             <FormLabel>What kind of stove do you have?</FormLabel>
    //                             <RadioGroup aria-labelledby="stove_type" name="stove_type"
    //                                 value={stoveType}
    //                                 onChange={handleStoveType}>
    //                                 <FormControlLabel value="flat top / glass top" control={<Radio />} label="flat top / glass top" />
    //                                 <FormControlLabel value="drip pans with removable burners" control={<Radio />} label="drip pans with removable burners" />
    //                                 <FormControlLabel value="industrial stove with removable grates" control={<Radio />} label="industrial stove with removable grates" />
    //                             </RadioGroup>
    //                         </>
    //                     }
    //                     {cleanStove === 'yes' &&
    //                         <>
    //                             {/* HOOD VENT */}
    //                             <FormLabel>Do you want us to clean the hood vent?</FormLabel>
    //                             <RadioGroup aria-labelledby="clean_hood_vent" name="clean_hood_vent"
    //                                 value={hoodVent}
    //                                 onChange={handleHoodVent}>
    //                                 <FormControlLabel value="yes" control={<Radio />} label="yes" />
    //                                 <FormControlLabel value="no" control={<Radio />} label="no" />
    //                             </RadioGroup>
    //                         </>
    //                     }
    //                     {hoodVent === 'yes' &&
    //                         <>
    //                             {/* HOOD VENT SPECIAL INSTRUCTIONS */}
    //                             <FormLabel>Any special instructions for cleaning the hood vent?</FormLabel>
    //                             <input value={hoodVentInstructions} onChange={handleHoodVentInstructions} />
    //                         </>
    //                     }
    //                 </FormControl>
    //             </FormGroup>
    //         </>
    //     )
    // }
    function MicrowaveGroup() {

        const handleMicrowave = event => {
            setCleanMicrowave(event.target.value);
        }

        return (
            <>
                <h3>Microwave</h3>
                <FormGroup>
                    <FormControl>
                        {/* CLEAN MICROWAVE */}
                        <FormLabel>Do you want us to clean your microwave?</FormLabel>
                        <RadioGroup aria-labelledby="clean_microwave" name="clean_microwave"
                            row defaultValue="yes" value={cleanMicrowave}
                            onChange={handleMicrowave}>
                            <FormControlLabel value="yes" control={<Radio />} label="yes" />
                            <FormControlLabel value="no" control={<Radio />} label="no" />
                        </RadioGroup>
                    </FormControl>
                </FormGroup>
            </>
        )
    }

    function ApplianceGroup() {

        const cleanAppliancesChange = event => {
            setCleanAppliances(event.target.value); `
            setWipeFridge('');`
            setWipeDishwasher('');
            setFridgeSS('');
        }

        const handleWipeFridge = event => {
            setWipeFridge(event.target.value);
            setFridgeSS('');
        }

        const handleFridgeSS = event => {
            setFridgeSS(event.target.value);
        }

        const handleWipeDishwasher = event => {
            setWipeDishwasher(event.target.value);
            setDishwasherSS('');
        }

        const handleDishwasherSS = event => {
            setDishwasherSS(event.target.value);
        }

        const handleWipeDeepFreeze = event => {
            setDeepFreeze(event.target.value);
        }

        return (
            <>
                <h3>Appliances</h3>
                {/* APPLIANCES */}
                <FormGroup>
                    <FormControl>

                        <FormLabel>Do you want us to wipe the fronts of appliances?</FormLabel>
                        <RadioGroup aria-labelledby="wipe_appliances" name="wipe_appliances"
                            row defaultValue="yes" value={cleanAppliances}
                            onChange={cleanAppliancesChange}>
                            <FormControlLabel value="yes" control={<Radio />} label="yes" />
                            <FormControlLabel value="no" control={<Radio />} label="no" />
                        </RadioGroup>

                        {/* if cleanAppliances is set to yes, display specific appliances to be cleaned */}
                        {cleanAppliances === 'yes' &&
                            <>
                                {/* CLEAN FRIDGE */}
                                <h4>Fridge</h4>
                                <FormLabel>Wipe Fridge?</FormLabel>
                                <RadioGroup aria-labelledby="wipe_fridge" name="wipe_fridge"
                                    row value={wipeFridge}
                                    onChange={handleWipeFridge}>
                                    <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="no" />
                                </RadioGroup>
                            </>
                        }
                        {wipeFridge === 'yes' &&
                            <>
                                {/* CHECK IF FRIDGE IS STAINLESS STEEL */}
                                <FormLabel>Is the fridge stainless steel?</FormLabel>
                                <RadioGroup aria-labelledby="fridge_ss" name="fridge_ss"
                                    row value={fridgeSS}
                                    onChange={handleFridgeSS}>
                                    <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="no" />
                                </RadioGroup>
                            </>
                        }

                        {cleanAppliances === 'yes' &&
                            <>
                                {/* CLEAN DISHWASHER */}
                                <h4>Dishwasher</h4>
                                <FormLabel>Wipe dishwasher?</FormLabel>
                                <RadioGroup aria-labelledby="wipe_dishwasher" name="wipe_dishwasher"
                                    row value={wipeDishwasher}
                                    onChange={handleWipeDishwasher}>
                                    <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="no" />
                                </RadioGroup>
                            </>
                        }
                        {wipeDishwasher === 'yes' &&
                            <>
                                {/* CHECK IF DISHWASHER IS STAINLESS STEEL */}
                                <FormLabel>Is the fridge stainless steel?</FormLabel>
                                <RadioGroup aria-labelledby="fridge_ss" name="fridge_ss"
                                    row value={dishwasherSS}
                                    onChange={handleDishwasherSS}>
                                    <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="no" />
                                </RadioGroup>
                            </>
                        }
                        {cleanAppliances === 'yes' &&
                            <>
                                {/* CLEAN DEEP FREEZE */}
                                <h4>Deep Freeze</h4>
                                <FormLabel>Wipe deep freeze?</FormLabel>
                                <RadioGroup aria-labelledby="wipe_deep_freeze" name="wipe_deep_freeze"
                                    row value={wipeDeepFreeze}
                                    onChange={handleWipeDeepFreeze}>
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
    function CabinetGroup() {

        const cleanCabinetChange = event => {
            setCleanCabinets(event.target.value);
            setCabinetsCleanType('');
            setOrangeGlo('');
        }

        const handleCabinetCleanType = event => {
            setCabinetsCleanType(event.target.value);
        }

        const handleOrangeGlo = event => {
            setOrangeGlo(event.target.value);
        }

        return (
            <>
                <h3>Cabinets</h3>
                <FormGroup>
                    {/* CABINETS */}
                    <FormControl>
                        <FormLabel>Wipe the fronts of the cabinets and drawers in the kitchen?</FormLabel>
                        <RadioGroup aria-labelledby="clean_cabinets" name="clean_cabinets"
                            row defaultValue="yes" value={cleanCabinets}
                            onChange={cleanCabinetChange}>
                            <FormControlLabel value="yes" control={<Radio />} label="yes" />
                            <FormControlLabel value="no" control={<Radio />} label="no" />
                        </RadioGroup>
                        {cleanCabinets === 'yes' &&
                            <RadioGroup>
                                {/* CABINET CLEAN METHOD */}
                                <FormLabel>How should we clean cabinets?</FormLabel>
                                <RadioGroup aria-labelledby="wipe_or_spot_cabinets" name="wipe_or_spot_cabinets"
                                    row value={cabinetsCleanType}
                                    onChange={handleCabinetCleanType}>
                                    <FormControlLabel value="spot clean" control={<Radio />} label="spot clean" />
                                    <FormControlLabel value="full wipe down" control={<Radio />} label="full wipe down" />
                                </RadioGroup>

                                {/* USE ORANGE GLO FOR WOOD? */}
                                <FormLabel>If wood cabinets, should we use orange glo polish?</FormLabel>
                                <RadioGroup aria-labelledby="wipe_or_spot_cabinets" name="wipe_or_spot_cabinets"
                                    row value={useOrangeGlo}
                                    onChange={handleOrangeGlo}>
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
}

export default KitchenForm;