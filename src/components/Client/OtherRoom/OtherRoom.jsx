import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, 
    FormControl, 
    FormGroup, 
    RadioGroup, 
    FormLabel, 
    FormControlLabel, 
    Radio,
    } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function OtherRoom() {
    const dispatch = useDispatch();
    const otherRoom = useSelector(store => store.clientOtherRoom);
    const history = useHistory();

    let counter = 1;
    const otherRoomHeader = `Other Room #${counter}`;

    // const addRoom = () => {
    //     dispatch({type: 'ADD_OTHER_ROOM', payload: otherRoom});
    // }

    // const moveToFinalTouches = () => {
    //     dispatch({type: 'ADD_OTHER_ROOM', payload: otherRoom});
    //     history.push('/wipeDustForm');
    // }
    // Not using these for now.
    // const [otherInput, setOtherInput] = useState('');
    // const [checkedRoomType, setCheckedRoomType] = useState(false);
    // const handleOtherInput = (event) => {
    //     setOtherInput(event.target.value);
    //     console.log('otherInput:', otherInput);
    //     dispatch({ type: 'SET_OTHER_ROOM_TYPE', payload: event.target.value })
    // }

    return (
        <>
            <h3>Other Room</h3>
            <FormGroup>
                <FormControl>

                    {/* ROOM TYPES */}
                    <FormLabel>Select room type:</FormLabel>
                    <RadioGroup aria-labelledby="room_type" name="room_type"
                        row value={otherRoom.form_type}
                        onChange={e => dispatch({ type: 'SET_FORM_TYPE', payload: e.target.value })}>
                        <FormControlLabel value="bedroom" control={<Radio />} label="Bedroom" />
                        <FormControlLabel value="livingRoom" control={<Radio />} label="Living Room" />
                        <FormControlLabel value="diningRoom" control={<Radio />} label="Dining Room" />
                        <FormControlLabel value="office" control={<Radio />} label="Office" />
                        <FormControlLabel value="library" control={<Radio />} label="Library" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>

                    {/* SQ FT */}
                    <FormLabel>What is the square footage of the room?</FormLabel>
                    <TextField required size='small' placeholder="*Required" sx={{ width: 150 }} value={otherRoom.sq_ft}
                        onChange={e => dispatch({ type: 'SET_SQ_FT', payload: e.target.value })} />

                    {/* WIPE SURFACES? */}
                    <FormLabel>Do surfaces need to be wiped?</FormLabel>
                    <RadioGroup aria-labelledby="wipe_surfaces" name="wipe_surfaces"
                        row value={otherRoom.wipe_surfaces}
                        onChange={e => dispatch({ type: 'SET_WIPE_SURFACES', payload: (e.target.value === 'true') })}>
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>

                    {/* CLEAN FLOORS? */}
                    <FormLabel>Do floors need to be cleaned?</FormLabel>
                    <RadioGroup aria-labelledby="clean_floor" name="clean_floor"
                        row value={otherRoom.clean_floor}
                        onChange={e => dispatch({ type: 'SET_CLEAN_FLOOR', payload: (e.target.value === 'true') })}>
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>

                    {/* If clean floor = yes then show the form for floor type. */}
                    {otherRoom.clean_floor === true &&
                        <>
                            {/* FLOOR TYPE */}
                            <FormLabel>Select floor type:</FormLabel>
                            <RadioGroup aria-labelledby="floor_type" name="floor_type"
                                row value={otherRoom.floor_type}
                                onChange={e => dispatch({ type: 'SET_FLOOR_TYPE', payload: e.target.value })}>
                                <FormControlLabel value="wood" control={<Radio />} label="Wood" />
                                <FormControlLabel value="carpet" control={<Radio />} label="Carpet" />
                                <FormControlLabel value="tiles" control={<Radio />} label="Tiles" />
                                <FormControlLabel value="laminate" control={<Radio />} label="Laminate" />
                                <FormControlLabel value="vinyl" control={<Radio />} label="Vinyl" />
                                <FormControlLabel value="concrete" control={<Radio />} label="Concrete" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </>
                    }
                    

                </FormControl>
            </FormGroup>
        </>
    )
}

export default OtherRoom;