import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {  FormControl, FormGroup, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';

function CountersSinksGroup() {

    const kitchen = useSelector(store => store.clientKitchen)
    const dispatch = useDispatch();

    return (
        <>
            <h3>Counters and Sinks</h3>
            <FormGroup>
                <FormControl>
                    {/* WIPE COUNTERS AND SINKS */}
                    <FormLabel>Do you want us to wipe off the counters and sink(s)?</FormLabel>

                    <RadioGroup aria-labelledby="wipe_counters_sink" name="wipe_counters_sink"
                        row value={kitchen.wipe_counters_sink}
                        onChange={e => dispatch({ type: 'SET_COUNTERS_SINK', payload: (e.target.value === 'true') })}>
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
                    <h5>
                        Note: In most cases we will move items on top of the counter out,
                        and get under and behind those items. We will also wipe off the tops of those items.
                        Things here could include coffee makers, toasters, and baking jars.
                    </h5>

                    {kitchen.wipe_counters_sink === true &&
                        <>
                            {/* CHECK IF COUNTERS ARE GRANITE TOP */}
                            <FormLabel>Do you have granite counter tops?</FormLabel>
                            <RadioGroup aria-labelledby="granite_counter_tops" name="granite_counter_tops"
                                row value={kitchen.granite_counter_tops}
                                onChange={e => dispatch({ type: 'SET_GRANITE_COUNTERS', payload: (e.target.value === 'true') })}>
                                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                            </RadioGroup>
                        </>
                    }
                </FormControl>
            </FormGroup>
        </>
    )
}

export default CountersSinksGroup;