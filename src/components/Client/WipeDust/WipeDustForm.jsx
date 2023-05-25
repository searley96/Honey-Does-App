import GlassDoorsGroup from "./GlassDoorsGroup";
import MirrorsGroup from "./OtherMirrorsGroup";
import DustCeilingGroup from "./DustCeilingGroup";
import DustOtherGroup from "./DustOtherGroup";
import DustFurnitureGroup from "./DustFurnitureGroup"

import { Button, Stack, Box, FormGroup, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function WipeDustForm() {

    const dispatch = useDispatch();
    // user.form_job_id connected to the user table.
    //    - identifier that allows to collect all forms
    //      a user fills out for an estimate
    const jobId = useSelector(store => store.user.form_job_id)
    // the list of forms that have a job_id that match user.form_job_id
    const history = useHistory();
    // the state of the current kitchen form
    const formList = useSelector(store => store.formList);

    const wipeDust = useSelector(store => store.clientWipeDust);

    const toEstimate = () => {
        const order = formList.length + 1;
        // dispatch to room.saga that triggers post request to form.router ('/kitchen/')
        dispatch({
            type: 'ADD_WIPE_DUST',
            payload: {
                wipeDustForm: {
                    wipeDust,
                    jobId,
                    order
                },
                formList
            }
        })

        // history.push('/estimate')
        history.push('/profile'); // TEMP
    }

    return (
        <Box sx={{ ml: '20px' }}>
            <h3>Wipe</h3>
            <FormGroup>
                <FormControl>
                    <FormLabel>Do you want us to wipe or clean any glass?</FormLabel>
                    <RadioGroup aria-labelledby="wipe_clean_glass" name="wipe_clean_glass"
                        row value={wipeDust.wipe_clean_glass}
                        onChange={e => dispatch({ type: 'SET_WIPE_CLEAN_GLASS', payload: (e.target.value == 'true') })}>
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
                    {wipeDust.wipe_clean_glass === true &&
                        <>
                            <Box sx={{ my: '30px' }}>
                                <GlassDoorsGroup />
                            </Box>
                            <Box sx={{ my: '30px' }}>
                                <MirrorsGroup />
                            </Box>
                        </>
                    }
                </FormControl>
            </FormGroup>
            <h3>Dust</h3>
            <FormGroup>
                <FormControl>
                    <FormLabel>Do you want us to dust?</FormLabel>
                    <RadioGroup aria-labelledby="dust" name="dust"
                        row value={wipeDust.dust}
                        onChange={e => dispatch({ type: 'SET_DUST', payload: (e.target.value == 'true') })}>
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
                    {wipeDust.dust === true &&
                        <>
                            <Box sx={{ my: '30px' }}>
                                <DustCeilingGroup />
                            </Box>
                            <Box sx={{ my: '30px' }}>
                                <DustOtherGroup />
                            </Box>
                            <Box sx={{ my: '30px' }}>
                                <DustFurnitureGroup />
                            </Box>
                        </>
                    }
                </FormControl>
            </FormGroup>
            <Stack>
                <Button variant="contained" sx={{ width: '70%', alignSelf: 'center', mt: 5 }} onClick={toEstimate}>
                    Complete Form and Get Estimate
                </Button>
            </Stack>
        </Box>
    )
}

export default WipeDustForm;