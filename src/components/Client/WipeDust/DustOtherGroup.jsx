import { Button, Stack, Box, FormGroup, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";

function DustOtherGroup() {

    const wipeDust = useSelector(store => store.clientWipeDust);
    const dispatch = useDispatch();

    return (
        <>
            <h3>General House Item Dusting</h3>
            {/* Duster Type */}
            <FormLabel>Please select which you prefer</FormLabel>
            <RadioGroup aria-labelledby="swiffer_feather" name="swiffer_feather"
            row value={wipeDust.swiffer_feather}
            onChange={e => dispatch({ type: 'SET_SWIFFER_FEATHER', payload: event.target.value })}>
                <FormControlLabel value="swiffer" control={<Radio />} label="Swiffer" />
                <FormControlLabel value="feather" control={<Radio />} label="Feather" />
            </RadioGroup>
            {/* Dust Window Blinds */}
            <FormLabel>Do you want us to dust window blinds?</FormLabel>
            <RadioGroup aria-labelledby="window_blinds" name="window_blinds"
            row value={wipeDust.window_blinds}
            onChange={e => dispatch({ type: 'SET_WINDOW_BLINDS', payload: event.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
            {/* Dust Window Ledges */}
            <FormLabel>Do you want us to dust window ledges?</FormLabel>
            <RadioGroup aria-labelledby="window_ledges" name="window_ledges"
            row value={wipeDust.window_ledges}
            onChange={e => dispatch({ type: 'SET_WINDOW_LEDGES', payload: event.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
            {/* Dust Window Sills */}
            <FormLabel>Do you want us to dust window sills?</FormLabel>
            <RadioGroup aria-labelledby="window_sills" name="window_sills"
            row value={wipeDust.window_sills}
            onChange={e => dispatch({ type: 'SET_WINDOW_SILLS', payload: event.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
            {/* Dust Picture Frames and Wall Decor */}
            <FormLabel>Do you want us to dust picture frames and other decor hung on the walls?</FormLabel>
            <RadioGroup aria-labelledby="picture_frames_wall_decor" name="picture_frames_wall_decor"
            row value={wipeDust.picture_frames_wall_decor}
            onChange={e => dispatch({ type: 'SET_PICTURE_FRAMES_WALL_DECOR', payload: event.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
            {/* Dust Tops of Decor Items */}
            <FormLabel>Do you want us to dust the tops of decor items and lamps on top of the furniture?</FormLabel>
            <RadioGroup aria-labelledby="tops_decor_items" name="tops_decor_items"
            row value={wipeDust.tops_decor_items}
            onChange={e => dispatch({ type: 'SET_TOPS_DECOR_ITEMS', payload: event.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
            {/* Pick Up and Get Under and Behind Objects */}
            <FormLabel>Do you want us to pick items up and get under and behind items?</FormLabel>
            <RadioGroup aria-labelledby="pick_up_get_under" name="pick_up_get_under"
            row value={wipeDust.pick_up_get_under}
            onChange={e => dispatch({ type: 'SET_PICK_UP_GET_UNDER', payload: event.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
            {/* Dust All Electronics */}
            <FormLabel>Do you want us to dust all electronics?</FormLabel>
            <RadioGroup aria-labelledby="electronics" name="electronics"
            row value={wipeDust.electronics}
            onChange={e => dispatch({ type: 'SET_ELECTRONICS', payload: event.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
            {/* Dust Anything Else */}
            <FormLabel>Do you want us to dust anything else?</FormLabel>
            <RadioGroup aria-labelledby="dust_other" name="dust_other"
            row value={wipeDust.dust_other}
            onChange={e => dispatch({ type: 'SET_DUST_OTHER', payload: event.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
            {wipeDust.dust_other === 'yes' &&
                <Box>
                    <FormLabel>Please list what else you would like to be dusted</FormLabel>
                    <TextField
                        multiline
                        sx={{width: '90%'}}
                        size="small"
                        placeholder="Example: 1. Den, 2. Backdoor, etc."
                        onChange={e => dispatch({ type: 'SET_DUST_OTHER_INSTRUCTIONS', payload: event.target.value })}
                    />
                </Box>
            }
        </>
    )
}

export default DustOtherGroup;