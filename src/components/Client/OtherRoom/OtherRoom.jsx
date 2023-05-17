import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, FormControl, FormGroup, RadioGroup, Checkbox, FormLabel, FormControlLabel, Radio } from '@mui/material';

function OtherRoom() {
    const dispatch = useDispatch();
    const otherRoom = useSelector(store => store.clientOtherRoom)

    return (
        <>
            <h3>Other Rooms</h3>
            <FormGroup>
                <FormControl>

                    {/* CLEAN OTHER ROOMS? */}
                    <FormLabel>Do you want us to clean another room?</FormLabel>
                    <RadioGroup aria-labelledby="clean_other_room" name="clean_other_room"
                        row value={kitchen.clean_other_room} // **** NEED TO ADD THIS COLUMN TO THE TABLE IN THE DATABASE!!! ****
                        onChange={e => dispatch({ type: 'SET_CLEAN_OTHER_ROOM', payload: event.target.value })}>
                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                        <FormControlLabel value="no" control={<Radio />} label="no" />
                    </RadioGroup>

                    {/* If clean other rooms = yes then show forms for room types and sq ft. */}
                    {kitchen.clean_other_room === 'yes' && 
                    <>
                    
                    {/* ROOM TYPES */}
                    <FormLabel>Select the type of room.</FormLabel>
                    <RadioGroup aria-labelledby="room_type" name="room_type"
                        row value={otherRoom.room_type}
                        onChange={e => dispatch({ type: 'SET_ROOM_TYPE', payload: event.target.value })}>
                        <FormControlLabel value="bedroom" control={<Radio />} label="Bedroom" />
                        <FormControlLabel value="livingRoom" control={<Radio />} label="Living Room" />
                        <FormControlLabel value="diningRoom" control={<Radio />} label="Dining Room" />
                        <FormControlLabel value="office" control={<Radio />} label="Office" />
                        <FormControlLabel value="laundry" control={<Radio />} label="Laundry" />
                    </RadioGroup>

                     {/* SQ FT */}
                    <FormLabel>What is the square footage of the room?</FormLabel>
                    <TextField size='small' value={otherRoom.sq_ft} 
                        onChange={e => dispatch({ type: 'SET_SQ_FT', payload: event.target.value })}/>

                    </>
                    }

                    {/* WIPE SURFACES? */}
                    <FormLabel>Do surfaces need to be wiped?</FormLabel>
                    <RadioGroup aria-labelledby="wipe_surfaces" name="wipe_surfaces"
                        row value={otherRoom.wipe_surfaces}
                        onChange={e => dispatch({ type: 'SET_WIPE_SURFACES', payload: event.target.value })}>
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>

                    {/* CLEAN FLOORS? */}
                    <FormLabel>Do floors need to be cleaned?</FormLabel>
                    <RadioGroup aria-labelledby="clean_floor" name="clean_floor"
                        row value={otherRoom.clean_floor}
                        onChange={e => dispatch({ type: 'SET_CLEAN_FLOOR', payload: event.target.value })}>
                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                        <FormControlLabel value="no" control={<Radio />} label="no" />
                    </RadioGroup>

                    {/* If clean floor = yes then show the form for floor type. */}
                    {kitchen.clean_floor === 'yes' && 
                    <>
                    {/* FLOOR TYPE */}
                    <FormLabel>Select floor type.</FormLabel>
                    <RadioGroup aria-labelledby="floor_type" name="floor_type"
                        row value={otherRoom.floor_type}
                        onChange={e => dispatch({ type: 'SET_FLOOR_TYPE', payload: event.target.value })}>
                        <FormControlLabel value="wood" control={<Radio />} label="Wood" />
                        <FormControlLabel value="carpet" control={<Radio />} label="Carpet" />
                        <FormControlLabel value="tiles" control={<Radio />} label="Tiles" />
                        <FormControlLabel value="laminate" control={<Radio />} label="Laminate" />
                        <FormControlLabel value="vinyl" control={<Radio />} label="Vinyl" />
                        <FormControlLabel value="na" control={<Radio />} label="N/A" />
                    </RadioGroup>
                    </>
                    }

                </FormControl>
            </FormGroup>
        </>
    )
}

export default OtherRoom;