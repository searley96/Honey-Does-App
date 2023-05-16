import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField, FormControl, FormGroup, RadioGroup, Checkbox, FormLabel, FormControlLabel, Radio } from '@mui/material';

function OtherRoomForm() {
    console.log('Inside OtherRoomForm()')
    const dispatch = useDispatch();
    const history = useHistory();

    // what is the best way to go about this? do we want each input to have its own state or 
    // can all the inputs get captured in one?
    let [otherRoomForm, setOtherRoomForm] = useState({
        room_type: '',
        floor_type: '',
        wipe_surfaces: '',
        clean_floor: '',
        sq_ft: ''
    });

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

    const setOtherRoomForm = (event) => {
        let targetInputField = event.target.id;
        switch (targetInputField) {
            case '1':
                setOtherRoomForm({ ...otherRoomForm, room_type: event.target.value })
                break;
            case '2':
                setOtherRoomForm({ ...otherRoomForm, room_type: event.target.value })
                break;
            case '3':
                setOtherRoomForm({ ...otherRoomForm, room_type: event.target.value })
                break;
            case '4':
                setOtherRoomForm({ ...otherRoomForm, room_type: event.target.value })
                break;
            case '5':
                setOtherRoomForm({ ...otherRoomForm, room_type: event.target.value })
                break;
        }
    }

    return (
        
    )
}

export default OtherRoomForm;