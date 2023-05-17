import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField, FormControl, FormGroup, RadioGroup, Checkbox, FormLabel, FormControlLabel, InputLabel, Input, Radio } from '@mui/material';

function OtherRoomForm() {
    console.log('Inside OtherRoomForm()')
    const dispatch = useDispatch();
    const history = useHistory();

    let [otherRoomForm, setOtherRoomForm] = useState({
        room_type: '',
        floor_type: '',
        wipe_surfaces: '',
        clean_floor: '',
        sq_ft: ''
    });

    const setForm = (event) => {
        let targetInputField = event.target.id;
        switch (targetInputField) {
            case '1':
                setOtherRoomForm({ ...otherRoomForm, room_type: event.target.value })
                break;
            case '2':
                setOtherRoomForm({ ...otherRoomForm, floor_type: event.target.value })
                break;
            case '3':
                setOtherRoomForm({ ...otherRoomForm, wipe_surfaces: event.target.value })
                break;
            case '4':
                setOtherRoomForm({ ...otherRoomForm, clean_floor: event.target.value })
                break;
            case '5':
                setOtherRoomForm({ ...otherRoomForm, sq_ft: event.target.value })
                break;
        }
    }

    // this function is called when the Next button is clicked
    const submitHandler = (event) => {
        event.preventDefault();
        // if form is filled, post form to db
        if (otherRoomForm.room_type && otherRoomForm.floor_type && otherRoomForm.wipe_surfaces && otherRoomForm.clean_floor && otherRoomForm.sq_ft) {
            dispatch({ type: 'ADD_OTHERROOMFORM', payload: otherRoomForm })
            // and go to the Price Estimate Result page
            history.push('/whateverTheNameofThePriceEstimateResultPageIs');
        }
    }

    return (
        <FormGroup>
            <FormControl>
                {/* What if the client has multiple other rooms that needs a cleaning? For ex: bedroom, office, living room, etc. 
                How do we capture that to store in the db? So for now, I'm building the form so that it's only taking one room. */}
                <FormLabel>Would you like to request a cleaning for another room? If so, select the type of room.</FormLabel>
                <RadioGroup aria-labelledby="room_type" name="room_type"
                    row defaultValue="yes" value={otherRoomForm.room_type}
                    onChange={setForm}>
                    <FormControlLabel value="bedroom" control={<Radio />} label="Bedroom" />
                    <FormControlLabel value="livingRoom" control={<Radio />} label="Living Room" />
                    <FormControlLabel value="diningRoom" control={<Radio />} label="Dining Room" />
                    <FormControlLabel value="office" control={<Radio />} label="Office" />
                    <FormControlLabel value="laundry" control={<Radio />} label="Laundry" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                {/* Maybe have a textbox here for the client to type in the type of room that's not listed here */}

                {/* The input isn't in the place I want it to be. */}
                <InputLabel htmlFor="sq_ft">What is the square footage of the room?</InputLabel>
                <Input id="sq_ft" />


                <FormLabel>Do surfaces need to be wiped?</FormLabel>
                <RadioGroup aria-labelledby="wipe_surfaces" name="wipe_surfaces"
                    row defaultValue="yes" value={otherRoomForm.wipe_surfaces}
                    onChange={setForm}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>

                <FormLabel>Do floors need to be cleaned?</FormLabel>
                <RadioGroup aria-labelledby="clean_floor" name="clean_floor"
                    row defaultValue="yes" value={otherRoomForm.clean_floor}
                    onChange={setForm}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>

                <FormLabel>If floors need to be cleaned, please select floor type.</FormLabel>
                <RadioGroup aria-labelledby="floor_type" name="floor_type"
                    row defaultValue="yes" value={otherRoomForm.floor_type}
                    onChange={setForm}>
                    <FormControlLabel value="wood" control={<Radio />} label="Wood" />
                    <FormControlLabel value="carpet" control={<Radio />} label="Carpet" />
                    <FormControlLabel value="tiles" control={<Radio />} label="Tiles" />
                    <FormControlLabel value="laminate" control={<Radio />} label="Laminate" />
                    <FormControlLabel value="vinyl" control={<Radio />} label="Vinyl" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel value="na" control={<Radio />} label="N/A" />
                </RadioGroup>
                {/* Maybe have a textbox here for the client to type in the type of floor that's not listed here */}
            </FormControl>
            {/* Need to create a Next button here that will also act as a submit button */}
        </FormGroup>
    )
}

export default OtherRoomForm;