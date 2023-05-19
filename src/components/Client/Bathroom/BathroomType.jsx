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

function BathroomType() {
  const bathroom = useSelector((store) => store.clientBathroomReducer);
  const dispatch = useDispatch();
  //   console.log('bathroom', bathroom)

  return (
    <>
      <h3>Bathroom Type</h3>
      <FormGroup>
        <FormControl>
          <FormLabel id="bathroom-type">Bathroom Type</FormLabel>
          <RadioGroup
            aria-labelledby="bathroom-type-group"
            name="bathroom-type-group"
            row
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
        </FormControl>
      </FormGroup>
    </>
  );
}

export default BathroomType;
