import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
            onChange={e =>
              dispatch({
                type: "SET_TAKE_OUT_TRASH",
                payload: (e.target.value === 'true')
              })
            }
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>

          {/* if trash out is set to yes, display removal instructions box */}

          {bathroom.take_out_trash === true && 
          <>
          {/* Trash removal instructions */}
          <FormLabel>Please enter trash removal instructions.<br />
          (Add to kitchen trash, take outside to dumpster, etc.)
          </FormLabel>
          <TextField size='small' value={bathroom.take_out_trash_instructions}
              onChange={e =>
                  dispatch({
                      type: 'SET_TAKE_OUT_TRASH_INSTRUCTIONS',
                      payload: e.target.value
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
