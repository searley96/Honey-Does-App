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
        [wipeDeepFreeze, setDeepFreeze] = useState('');


    return (

        <>
            <CabinetGroup />
            <ApplianceGroup />
        </>
    );
    function ApplianceGroup() {

        const cleanAppliancesChange = event => {
            setCleanAppliances(event.target.value);
            setWipeFridge('');
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