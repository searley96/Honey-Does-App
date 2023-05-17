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
  TextField,
} from "@mui/material";

function TrashForm() {
  const bathroom = useSelector((store) => store.clientBathroomReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Trash</h3>
      <FormGroup>
        <FormControl>
          <FormLabel>Do you want trash taken out?</FormLabel>
          <RadioGroup
            aria-labelledby="trash-out"
            name="trash-out"
            row
            value={bathroom.take_out_trash}
            onChange={(event) =>
              dispatch({
                type: "SET_TAKE_OUT_TRASH",
                payload: event.target.value,
              })
            }
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>

          {/* if trash out is set to yes, display removal instructions box */}

          {bathroom.take_out_trash === "Yes" && 
          <>
          {/* Trash removal instructions */}
          <FormLabel>Please enter trash removal instructions.<br />
          (Add to kitchen trash, take outside to dumpster, etc.)
          </FormLabel>
          <TextField size='small' value={bathroom.take_out_trash_instructions}
              onChange={(event) =>
                  dispatch({
                      type: 'SET_TAKE_OUT_TRASH_INSTRUCTIONS',
                      payload: event.target.value
                  })}
          />

      </>
  }
        </FormControl>
      </FormGroup>
    </>
  );
}

export default TrashForm;
