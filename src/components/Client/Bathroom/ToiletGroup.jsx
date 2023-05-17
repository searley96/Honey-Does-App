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

function ToiletGroup() {
  const bathroom = useSelector((store) => store.clientBathroomReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Toilet</h3>
      <FormGroup>
        <FormControl>
          <FormLabel> Clean Toilet?</FormLabel>
          <RadioGroup
            aria-labelledby="clean-toilet"
            name="clean-toilet"
            row
            value={bathroom.clean_toilet}
            onChange={(event) =>
              dispatch({
                type: "SET_CLEAN_TOILET",
                payload: event.target.value,
              })
            }
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </FormGroup>
    </>
  );
}

export default ToiletGroup;
