import { Button, Stack, Box, FormGroup, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";

function DustFurnitureGroup() {

    const wipeDust = useSelector(store => store.clientWipeDust);
    const dispatch = useDispatch();

    return (
        <>
            <h3>Dust Bedroom and Living Room Furniture</h3>
            {/* Dust Bedroom and Living Room Furniture */}
            <FormLabel>Do you want us to dust bedroom/living room furniture such as dressers and tables, desks and bed frames?</FormLabel>
            <RadioGroup aria-labelledby="dust_bed_living_furniture" name="dust_bed_living_furniture"
            row value={wipeDust.dust_bed_living_furniture}
            onChange={e => dispatch({ type: 'SET_DUST_BED_LIVING_FURNITURE', payload: event.target.value })}>
                <FormControlLabel value='yes' control={<Radio />} label="Yes" />
                <FormControlLabel value='no' control={<Radio />} label="No" />
            </RadioGroup>
            {wipeDust.dust_bed_living_furniture === 'yes' &&
                <>
                    {/* Dust Bedroom and Living Room Furniture Duster */}
                    <FormLabel>Please select which you prefer</FormLabel>
                    <RadioGroup aria-labelledby="bed_living_furniture_duster" name="bed_living_furniture_duster"
                    row value={wipeDust.bed_living_furniture_duster}
                    onChange={e => dispatch({ type: 'SET_BED_LIVING_FURNITURE_DUSTER', payload: event.target.value })}>
                        <FormControlLabel value="swiffer" control={<Radio />} label="Swiffer" />
                        <FormControlLabel value="feather" control={<Radio />} label="Feather" />
                    </RadioGroup>
                    {/* Use Orange Glo when applicable */}
                    <FormLabel>Do you want us to use orange glo where applicable?</FormLabel>
                    <RadioGroup aria-labelledby="orange_glo_applicable" name="orange_glo_applicable"
                    row value={wipeDust.orange_glo_applicable}
                    onChange={e => dispatch({ type: 'SET_ORANGE_GLO_APPLICABLE', payload: event.target.value })}>
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </>
            }
        </>
    )
}

export default DustFurnitureGroup;