import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  FormControl,
  FormGroup,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";

function BathroomFloors() {

  const bathroom = useSelector((store) => store.clientBathroomReducer);
  const dispatch = useDispatch();

    return (
        <>
        <h3>Floors</h3>
        <FormGroup>
          <FormControl>
            <FormLabel>Do you want us to sweep and mop floors?</FormLabel>
            <RadioGroup
            aria-labelledby="sweep-mop"
            name="sweep-mop"
            row
            value={bathroom.sweep_mop_floor}
            onChange={e =>
              dispatch({
                type: 'SET_SWEEP_MOP_FLOOR',
                payload: (e.target.value === 'true')
              })
            }
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>

          {/* if sweep/mop is set to yes, display rugs option */}

          {bathroom.sweep_mop_floor === true && (
          <>
            <FormLabel>
              Do you have accent rugs that need to be moved/shaken beforehand?
            </FormLabel>
            <RadioGroup
              aria-labelledby="shake-rugs"
              name="shake-rugs"
              row
              value={bathroom.shake_rugs}
              onChange={e =>
                dispatch({
                  type: 'SET_SHAKE_RUGS',
                  payload: (e.target.value === 'true')
                })
              }
            >
              <FormControlLabel value={true} control={<Radio />} label="Yes" />
              <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
          </>
        )}
          </FormControl>
        </FormGroup>
        </>
    )
};

export default BathroomFloors;