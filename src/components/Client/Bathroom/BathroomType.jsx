import React, { useState } from "react";
import { useDispatch, useSelector, FormHelperText } from "react-redux";
import {
  FormControl,
  FormGroup,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";

function BathroomType() {
  const bathroom = useSelector((store) => store.clientBathroomReducer);
  const dispatch = useDispatch();
  
  

  return (
    <>
      <h3>Bathroom Type</h3>
      <FormGroup>
        <FormControl>
          <FormLabel id="bathroom-type" required>Bathroom Type</FormLabel>
          <RadioGroup
            aria-required='true'
            aria-labelledby="bathroom-type-group"
            name="bathroom-type-group"
            value={bathroom.bathroom_type}
            onChange={e =>
              dispatch({
                type: "SET_BATHROOM_TYPE",
                payload: e.target.value,
              })
            }
          >
            <FormControlLabel
              value="Full Bath"
              control={<Radio />}
              label="Full Bath"
            />
            <FormControlLabel
              value="Half Bath"
              control={<Radio />}
              label="Half Bath"
              aria-checked={true}
            />
            <FormControlLabel
              value="Don't Clean"
              control={<Radio />}
              label="Don't Clean"
            />
          </RadioGroup>
          {/* <helperText>{helperText}</helperText> */}
        </FormControl>
      </FormGroup>
    </>
  );
}

export default BathroomType;
