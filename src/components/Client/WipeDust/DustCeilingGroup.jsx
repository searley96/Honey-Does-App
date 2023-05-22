import { Button, Stack, Box, FormGroup, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";

function DustCeilingGroup() {

    const wipeDust = useSelector(store => store.clientWipeDust);
    const dispatch = useDispatch();

    
    return (
        <>
            <h3>Extender Duster</h3>
            {/* Dust the Ceiling */}
            <FormLabel>Do you want us to dust ceiling lines, wall lines, and baseboards?</FormLabel>
            <RadioGroup aria-labelledby="ceiling_lines_wall_lines_baseboards" name="ceiling_lines_wall_lines_baseboards"
            row value={wipeDust.ceiling_lines_wall_lines_baseboards}
            onChange={e => dispatch({ type: 'SET_CEILING_LINES_WALL_LINES_BASEBOARDS', payload: (e.target.value == 'true') })}>
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
            {/* Dust Ceiling Fixtures and Fans */}
            <FormLabel>Do you want us to dust ceiling fixtures and fans?</FormLabel>
            <RadioGroup aria-labelledby="ceiling_fixtures" name="ceiling_fixtures"
            row value={wipeDust.ceiling_fixtures}
            onChange={e => dispatch({ type: 'SET_CEILING_FIXTURES', payload: (e.target.value == 'true') })}>
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
        </>
    )
}

export default DustCeilingGroup;