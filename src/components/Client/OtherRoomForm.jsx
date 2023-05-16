import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField, FormControl, FormGroup, RadioGroup, Checkbox, FormLabel, FormControlLabel, Radio } from '@mui/material';

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

    // QUESTION: What if the client does not want other rooms cleaned? What do we send to the db?
    // capture user inputs and set in to "otherRoomForm"
    const setOtherRoomForm = (event) => {
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
                <FormLabel></FormLabel>
            </FormControl>
        </FormGroup>
    )
}

export default OtherRoomForm;